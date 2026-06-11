package com.ncm.electro.dto.ghn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ncm.electro.entity.waybill.RequiredNote;
import lombok.Data;

@Data
public class GhnUpdateOrderRequest {
    @JsonProperty("order_code")
    private String orderCode;
    private String note;
    @JsonProperty("required_note")
    private RequiredNote requiredNote;
}
