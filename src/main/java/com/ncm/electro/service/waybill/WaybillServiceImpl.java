package com.ncm.electro.service.waybill;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.constant.SearchFields;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.ghn.GhnCallbackOrderRequest;
import com.ncm.electro.dto.ghn.GhnCreateOrderResponse;
import com.ncm.electro.dto.ghn.GhnUpdateOrderResponse;
import com.ncm.electro.dto.waybill.WaybillRequest;
import com.ncm.electro.dto.waybill.WaybillResponse;
import com.ncm.electro.entity.cashbook.PaymentMethodType;
import com.ncm.electro.entity.general.Notification;
import com.ncm.electro.entity.general.NotificationStatus;
import com.ncm.electro.entity.general.NotificationType;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.entity.order.OrderStatus;
import com.ncm.electro.entity.waybill.Waybill;
import com.ncm.electro.entity.waybill.WaybillLog;
import com.ncm.electro.entity.waybill.WaybillStatus;
import com.ncm.electro.exception.InvalidOrderStatusException;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.exception.WaybillAlreadyExistsException;
import com.ncm.electro.mapper.waybill.WaybillMapper;
import com.ncm.electro.repository.order.OrderRepository;
import com.ncm.electro.repository.waybill.WaybillLogRepository;
import com.ncm.electro.repository.waybill.WaybillRepository;
import com.ncm.electro.service.general.NotificationService;
import com.ncm.electro.service.ghn.GhnService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WaybillServiceImpl implements WaybillService{
    private final GhnService ghnService;
    private final NotificationService notificationService;

    private final WaybillMapper waybillMapper;

    private final WaybillRepository waybillRepository;
    private final OrderRepository orderRepository;
    private final WaybillLogRepository waybillLogRepository;

    @Override
    public ListResponse<WaybillResponse> findAll(int page, int size, String sort, String filter, String search, boolean all) {
        return defaultFindAll(page, size, sort, filter, search, all, SearchFields.WAYBILL, waybillRepository, waybillMapper);
    }

    @Override
    public WaybillResponse findById(Long id) {
        return defaultFindById(id, waybillRepository, waybillMapper, Waybill.class.getSimpleName());
    }

    @Override
    public WaybillResponse save(WaybillRequest waybillRequest) {
        waybillRepository.findByOrderId(waybillRequest.getOrderId())
                .ifPresent(w -> {throw new WaybillAlreadyExistsException(waybillRequest.getOrderId());
                });

        Order order = orderRepository.findById(waybillRequest.getOrderId())
                .orElseThrow(() -> new ResourceNotFoundException(Order.class.getSimpleName(), FieldName.ID, waybillRequest.getOrderId()));

        //tao waybill khi status = 1 (đơn hàng mới)
        if(order.getStatus() != OrderStatus.NEW.getValue()) {
            throw new InvalidOrderStatusException(order.getStatus());
        }

        GhnCreateOrderResponse ghnCreateOrderResponse = ghnService.createOrder(waybillRequest, order);
        Waybill waybill = waybillMapper.requestToEntity(waybillRequest);
        waybill.setCode(ghnCreateOrderResponse.getData().getOrderCode());
        waybill.setOrder(order);
        waybill.setExpectedDeliveryTime(ghnCreateOrderResponse.getData().getExpectedDeliveryTime());
        waybill.setStatus(WaybillStatus.WAITING.getValue()); // status = 1: Đang đợi lấy hàng
        waybill.setCodAmount(
                order.getPaymentMethodType() == PaymentMethodType.CASH
                        ? order.getTotalPay().intValue()
                        : 0
        );
        waybill.setShippingFee(ghnCreateOrderResponse.getData().getTotalFee());
        waybill.setGhnPaymentTypeId(order.getPaymentMethodType() == PaymentMethodType.CASH ? 2 : 1);
        return waybillMapper.entityToResponse(waybillRepository.save(waybill));
    }

    @Override
    public WaybillResponse save(Long id, WaybillRequest waybillRequest) {
        Waybill waybill = waybillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(Waybill.class.getSimpleName(), FieldName.ID, id));
        GhnUpdateOrderResponse ghnUpdateOrderResponse = ghnService.updateOrder(waybillRequest, waybill);
        if(ghnUpdateOrderResponse == null) {
            throw new RuntimeException("Update order GHN failure");
        }
        Waybill waybill1AfterSave = waybillRepository.save(waybillMapper.partialUpdate(waybill, waybillRequest));
        return waybillMapper.entityToResponse(waybill1AfterSave);
    }

    @Override
    public void delete(Long id) {
        waybillRepository.deleteById(id);
    }

    @Override
    public void delete(List<Long> ids) {
        waybillRepository.deleteAllById(ids);
    }

    @Override
    public void callbackStatusWaybillFromGHN(GhnCallbackOrderRequest request) {
        Waybill waybill = waybillRepository.findByCode(request.getOrderCode())
                .orElseThrow(() -> new ResourceNotFoundException(Waybill.class.getSimpleName(), FieldName.WAYBILL_CODE, request.getOrderCode()));

        Order order = waybill.getOrder();

        WaybillLog waybillLog = new WaybillLog();
        waybillLog.setWaybill(waybill);
        waybillLog.setPreviousStatus(waybill.getStatus());

        int currentWaybillStatus = WaybillCallbackConstants.WAYBILL_STATUS_CODE.get(request.getStatus());

        if(!waybill.getStatus().equals(currentWaybillStatus)) {
            switch (currentWaybillStatus) {
                case WaybillCallbackConstants.WAITING -> {
                    waybillLog.setCurrentStatus(WaybillStatus.WAITING.getValue());
                    waybill.setStatus(WaybillStatus.WAITING.getValue());
                    order.setStatus(OrderStatus.PROCESSING.getValue());
                }
                case WaybillCallbackConstants.SHIPPING -> {
                    notificationService.pushNotification(
                            Notification.builder()
                                    .user(order.getUser())
                                    .type(NotificationType.ORDER)
                                    .message(String.format("Đơn hàng %s của bạn đang đc vận chuyển.", order.getCode()))
                                    .anchor("/order/detail/" + order.getCode())
                                    .status(NotificationStatus.UNREAD)
                                    .build()
                    );
                    waybillLog.setCurrentStatus(WaybillStatus.SHIPPING.getValue());
                    waybill.setStatus(WaybillStatus.SHIPPING.getValue());
                    order.setStatus(OrderStatus.SHIPPING.getValue());
                }
                case WaybillCallbackConstants.SUCCESS -> {
                    notificationService.pushNotification(
                            Notification.builder()
                                    .user(order.getUser())
                                    .type(NotificationType.ORDER)
                                    .message(String.format("Đơn hàng %s của bạn đã giao thành công.", order.getCode()))
                                    .anchor("/order/detail/" + order.getCode())
                                    .status(NotificationStatus.UNREAD)
                                    .build()
                    );
                    waybillLog.setCurrentStatus(WaybillStatus.DELIVERED.getValue());
                    waybill.setStatus(WaybillStatus.DELIVERED.getValue());
                    order.setStatus(OrderStatus.DELIVERED.getValue());
                }
                case WaybillCallbackConstants.FAILED, WaybillCallbackConstants.RETURN -> {
                    notificationService.pushNotification(
                            Notification.builder()
                                    .user(order.getUser())
                                    .type(NotificationType.ORDER)
                                    .message(String.format("Đơn hàng %s của bạn đã bị hủy.", order.getCode()))
                                    .anchor("/order/detail/" + order.getCode())
                                    .status(NotificationStatus.UNREAD)
                                    .build()
                    );
                    waybillLog.setCurrentStatus(WaybillStatus.CANCELLED.getValue());
                    waybill.setStatus(WaybillStatus.CANCELLED.getValue());
                    order.setStatus(OrderStatus.CANCELLED.getValue());
                }
            }
        }
        waybillRepository.save(waybill);
        orderRepository.save(order);
        waybillLogRepository.save(waybillLog);
    }
}
