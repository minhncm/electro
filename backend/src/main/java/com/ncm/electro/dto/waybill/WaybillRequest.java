package com.ncm.electro.dto.waybill;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.ncm.electro.entity.waybill.RequiredNote;
import com.ncm.electro.utils.DefaultInstantDeserializer;
import jakarta.annotation.Nullable;
import lombok.Data;

import java.time.Instant;

@Data
public class WaybillRequest {
    private Long orderId;
    @JsonDeserialize(using = DefaultInstantDeserializer.class)
    private Instant shippingDate;
    private Integer weight;
    private Integer length;
    private Integer width;
    private Integer height;
    @Nullable
    private String note;
    private RequiredNote ghnRequiredNote;
}
