package com.ncm.electro.service.ghn;

import com.ncm.electro.dto.ghn.*;
import com.ncm.electro.dto.waybill.WaybillRequest;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.entity.waybill.Waybill;

public interface GhnService {
    GhnCreateOrderResponse createOrder(WaybillRequest waybillRequest, Order order);
    GhnUpdateOrderResponse updateOrder(WaybillRequest request, Waybill waybill);
    GhnShippingFeeResponse getShippingFee(GhnShippingFeeRequest request);
    GhnCancelOrderResponse cancelOrder(String orderCode);
}
