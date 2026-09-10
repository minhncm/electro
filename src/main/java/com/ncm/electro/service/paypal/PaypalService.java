package com.ncm.electro.service.paypal;

import com.paypal.sdk.models.Order;

public interface PaypalService {
    Order createOrder(com.ncm.electro.entity.order.Order order);
    void captureOrder(String paypalOrderId);
}
