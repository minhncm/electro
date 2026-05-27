package com.ncm.electro.service.ghn;

import com.ncm.electro.dto.ghn.*;
import com.ncm.electro.dto.waybill.WaybillRequest;
import com.ncm.electro.entity.cashbook.PaymentMethodType;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.entity.order.OrderVariant;
import com.ncm.electro.entity.waybill.Waybill;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class GhnServiceImpl implements GhnService {
    @Value("${ghn.token}")
    private String ghnToken;
    @Value("${ghn.shop-id}")
    private String ghnShopId;
    @Value("${ghn.url}")
    private String ghnUrl;
    @Override
    public GhnCreateOrderResponse createOrder(WaybillRequest waybillRequest, Order order) {
        String createOrderApiUrl = ghnUrl + "/shipping-order/create";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = buildHeader();
        var request = new HttpEntity<>(buildGhnCreateOrderRequest(waybillRequest, order), headers);
        var response = restTemplate.postForEntity(createOrderApiUrl, request, GhnCreateOrderResponse.class);

        if (!response.getStatusCode().is2xxSuccessful() || response.getBody().getData() == null) {
            throw new RuntimeException("Error when calling Create Order GHN API");
        }
        return response.getBody();
    }

    @Override
    public GhnUpdateOrderResponse updateOrder(WaybillRequest waybillRequest, Waybill waybill) {
        String updateOrderApiUrl = ghnUrl + "/shipping-order/update";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = buildHeader();
        var request = new HttpEntity<>(buildGhnUpdateOrderRequest(waybillRequest, waybill), headers);
        var response = restTemplate.postForEntity(updateOrderApiUrl, request, GhnUpdateOrderResponse.class);

        if (!response.getStatusCode().is2xxSuccessful()) {
            throw new RuntimeException("Error when calling Update Order GHN API");
        }
        return response.getBody();
    }

    @Override
    public GhnShippingFeeResponse getShippingFee(GhnShippingFeeRequest ghnShippingFeeRequest) {
        String getShippingFeeApiUrl = ghnUrl + "/shipping-order/fee";
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = buildHeader();
        var request = new HttpEntity<>(ghnShippingFeeRequest, headers);
        ResponseEntity<GhnShippingFeeResponse> response = restTemplate.exchange(getShippingFeeApiUrl, HttpMethod.POST, request, GhnShippingFeeResponse.class);
        return response.getBody();
    }

    private HttpHeaders buildHeader() {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setAccept(List.of(MediaType.APPLICATION_JSON));
        headers.set("Token", ghnToken);
        headers.set("ShopId", ghnShopId);
        return headers;
    }

    private GhnCreateOrderRequest buildGhnCreateOrderRequest(WaybillRequest waybillRequest, Order order) {
        GhnCreateOrderRequest request = new GhnCreateOrderRequest();

        request.setPaymentTypeId(order.getPaymentMethodType() == PaymentMethodType.CASH ? 2 : 1);
        request.setNote(waybillRequest.getNote());
        request.setRequiredNote(waybillRequest.getGhnRequiredNote());
        request.setToName(order.getToName());
        request.setToPhone(order.getToPhone());
        request.setToAddress(order.getToAddress());
        request.setToDistrictName(order.getToDistrictName());
        request.setToProvinceName(order.getToProvinceName());
        request.setCodAmount(
                order.getPaymentMethodType() == PaymentMethodType.CASH
                        ? order.getTotalPay().intValue()
                        : 0);
        request.setWeight(waybillRequest.getWeight());
        request.setLength(waybillRequest.getLength());
        request.setWidth(waybillRequest.getWidth());
        request.setHeight(waybillRequest.getHeight());
        request.setServiceTypeId(2); // 1 nhanh. 2: chuẩn, 3: tiết kiệm

        List<GhnCreateOrderRequest.Item> items = new ArrayList<>();
        for (OrderVariant orderVariant : order.getOrderVariants()) {
            GhnCreateOrderRequest.Item item = new GhnCreateOrderRequest.Item();
            item.setName(orderVariant.getVariant().getProduct().getName());
            item.setQuantity(orderVariant.getQuantity());
            item.setPrice(orderVariant.getPrice().intValue());
            items.add(item);
        }
        request.setItems(items);
        return request;
    }

    private GhnUpdateOrderRequest buildGhnUpdateOrderRequest(WaybillRequest waybillRequest, Waybill waybill) {
        GhnUpdateOrderRequest request = new GhnUpdateOrderRequest();
        request.setOrderCode(waybill.getCode());
        request.setNote(waybillRequest.getNote());
        request.setRequiredNote(waybillRequest.getGhnRequiredNote());
        return request;
    }
}
