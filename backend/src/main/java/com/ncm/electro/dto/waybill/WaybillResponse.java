package com.ncm.electro.dto.waybill;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.order.OrderResponse;
import com.ncm.electro.entity.waybill.RequiredNote;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.Instant;

@Data
@EqualsAndHashCode(callSuper = true)
public class WaybillResponse extends BaseResponse {
    private String code;
    private OrderResponse order;
    private Instant shippingDate;
    private Instant expectedDeliveryTime;
    private Integer status;
    private Integer codAmount;
    private Integer shippingFee;
    private Integer weight;
    private Integer length;
    private Integer width;
    private Integer height;
    @Nullable
    private String note;
    private Integer ghnPaymentTypeId;
    private RequiredNote ghnRequiredNote;
}
