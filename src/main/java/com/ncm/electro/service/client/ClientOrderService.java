package com.ncm.electro.service.client;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.*;
import com.ncm.electro.dto.ghn.GhnShippingFeeResponse;

public interface ClientOrderService {
    ListResponse<ClientSimpleOrderResponse> findAllByUsername(String username, int page, int size, String sort, String filter);
    ClientOrderResponse findByCode(String code);
    ClientConfirmedOrderResponse createOrder(ClientSimpleOrderRequest request);
    void captureOrder(String paypalOrderId);
    void cancelOrder(String code);
    GhnShippingFeeResponse getShippingFee(String username);
}
