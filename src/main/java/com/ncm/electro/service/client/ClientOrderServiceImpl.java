package com.ncm.electro.service.client;

import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.constant.FieldName;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientConfirmedOrderResponse;
import com.ncm.electro.dto.client.ClientOrderResponse;
import com.ncm.electro.dto.client.ClientSimpleOrderRequest;
import com.ncm.electro.dto.client.ClientSimpleOrderResponse;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.entity.cart.Cart;
import com.ncm.electro.entity.cart.CartVariant;
import com.ncm.electro.entity.cashbook.PaymentMethodType;
import com.ncm.electro.entity.order.*;
import com.ncm.electro.entity.promotion.Promotion;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.mapper.client.ClientOrderMapper;
import com.ncm.electro.repository.authentication.UserRepository;
import com.ncm.electro.repository.cart.CartRepository;
import com.ncm.electro.repository.cart.CartVariantRepository;
import com.ncm.electro.repository.order.OrderRepository;
import com.ncm.electro.repository.promotion.PromotionRepository;
import com.ncm.electro.service.paypal.PaypalService;
import com.ncm.electro.specification.OrderSpecification;
import com.paypal.sdk.exceptions.ApiException;
import com.paypal.sdk.models.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClientOrderServiceImpl implements ClientOrderService{
    private final OrderRepository orderRepository;
    private final ClientOrderMapper clientOrderMapper;
    private final CartRepository cartRepository;
    private final UserRepository userRepository;
    private final PromotionRepository promotionRepository;
    private final CartVariantRepository cartVariantRepository;
    private final PaypalService paypalService;
    @Override
    public ListResponse<ClientSimpleOrderResponse> findAllByUsername(String username, int page, int size, String sort, String filter) {
        Page<Order> orders = orderRepository.findAll(
                OrderSpecification
                        .sort(sort)
                        .and(OrderSpecification.filter(filter))
                        .and(OrderSpecification.hasUsername(username)),
                PageRequest.of(page - 1, size));
        List<ClientSimpleOrderResponse> clientSimpleOrderResponses = orders.map(clientOrderMapper::entityToSimpleResponse).toList();
        return ListResponse.of(clientSimpleOrderResponses, orders);
    }

    @Override
    public ClientOrderResponse findByCode(String code) {
        Order order = orderRepository.findByCode(code)
                .orElseThrow(() -> new ResourceNotFoundException(Order.class.getSimpleName(), FieldName.ORDER_CODE, code));
        return clientOrderMapper.entityToResponse(order);
    }

    @Override
    public ClientConfirmedOrderResponse createOrder(ClientSimpleOrderRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException(User.class.getSimpleName(), FieldName.USERNAME, username));

        Cart cart = cartRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException(Cart.class.getSimpleName(), FieldName.USERNAME, username));

        Order order = new Order();
        order.setCode(generateOrderCode());
        order.setStatus(1); // don hang moi
        order.setToName(user.getFullname());
        order.setToPhone(user.getPhone());
        order.setToAddress(user.getAddress().getLine());
        order.setToWardName(user.getAddress().getWard().getName());
        order.setToDistrictName(user.getAddress().getDistrict().getName());
        order.setToProvinceName(user.getAddress().getProvince().getName());
        OrderResource orderResource = new OrderResource();
        orderResource.setId(1L);
        order.setOrderResource(orderResource);
        order.setUser(user);
        order.setOrderVariants(convertToOrderVariant(cart.getCartVariants(), order));

        BigDecimal totalAmount = BigDecimal.valueOf(order.getOrderVariants().stream()
                .mapToDouble(orderVariant -> orderVariant.getAmount().doubleValue())
                .sum());
        BigDecimal tax = BigDecimal.valueOf(AppConstants.DEFAULT_TAX);
        BigDecimal shippingCost = BigDecimal.ZERO;
        BigDecimal totalPay = totalAmount.add(totalAmount.multiply(tax).setScale(0, RoundingMode.HALF_UP));

        order.setTotalAmount(totalAmount);
        order.setTax(tax);
        order.setShippingCost(shippingCost);
        order.setTotalPay(totalPay);
        order.setPaymentMethodType(request.getPaymentMethodType());
        order.setPaymentStatus(PaymentStatus.UNPAID);

        ClientConfirmedOrderResponse response = new ClientConfirmedOrderResponse();
        response.setPaymentMethodType(request.getPaymentMethodType());

        if(request.getPaymentMethodType() == PaymentMethodType.CASH) {
            orderRepository.save(order);
            cartVariantRepository.deleteAllInBatch(cart.getCartVariants());
        } else if(request.getPaymentMethodType() == PaymentMethodType.PAYPAL) {
            com.paypal.sdk.models.Order paypalOrder = paypalService.createOrder(order);
            order.setPaypalOrderId(paypalOrder.getId());
            order.setPaypalOrderStatus(paypalOrder.getStatus().toString());
            response.setPaypalOrderId(paypalOrder.getId());
            orderRepository.save(order);
        }
        return response;
    }

    @Override
    public void captureOrder(String paypalOrderId) {
        Order order = orderRepository.findByPaypalOrderId(paypalOrderId)
                .orElseThrow(() -> new ResourceNotFoundException(Order.class.getSimpleName(), FieldName.PAYPAL_ORDER_ID, paypalOrderId));

        order.setPaypalOrderStatus(OrderStatus.APPROVED.toString());
        orderRepository.save(order);

        paypalService.captureOrder(paypalOrderId);
        order.setPaypalOrderStatus(OrderStatus.COMPLETED.toString());
        order.setPaymentStatus(PaymentStatus.PAID);
        orderRepository.save(order);

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
        Cart cart = cartRepository.findByUsername(username)
                .orElseThrow(() -> new ResourceNotFoundException(Cart.class.getSimpleName(), FieldName.USERNAME, username));
        cartVariantRepository.deleteAllInBatch(cart.getCartVariants());
    }

    private String generateOrderCode() {
        String datePart = LocalDate.now().format(DateTimeFormatter.ofPattern("yyyMMdd"));
        String randomPart = String.format("%06d", new Random().nextInt(999999));
        return "ORD-" + datePart + "-" + randomPart;
    }

    private Set<OrderVariant> convertToOrderVariant(Set<CartVariant> cartVariants, Order order) {
        return cartVariants.stream()
                .map(cartVariant -> {
                    Promotion promotion = promotionRepository
                            .findActivePromotionByProductId(cartVariant.getVariant().getProduct().getId())
                            .stream()
                            .findFirst()
                            .orElse(null);
                    double currentPrice = calculateDiscountPrice(
                            cartVariant.getVariant().getPrice(),
                            promotion == null ? 0 : promotion.getPercent()
                    );

                    OrderVariant orderVariant = new OrderVariant();
                    orderVariant.setOrderVariantKey(new OrderVariantKey());
                    orderVariant.setOrder(order);
                    orderVariant.setVariant(cartVariant.getVariant());
                    orderVariant.setPrice(BigDecimal.valueOf(currentPrice));
                    orderVariant.setQuantity(cartVariant.getQuantity());
                    orderVariant.setAmount(BigDecimal.valueOf(currentPrice).multiply(BigDecimal.valueOf(cartVariant.getQuantity())));
                    return orderVariant;

                }).collect(Collectors.toSet());
    }

    private double calculateDiscountPrice(Double price, Integer discount) {
        return price * (100 - discount) / 100;
    }
}

