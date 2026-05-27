package com.ncm.electro.dto.ghn;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.ncm.electro.entity.waybill.RequiredNote;
import lombok.Data;

@Data
public class GhnUpdateOrderRequest {
    @JsonAlias("order_code")
    private String orderCode;
    private String note;
    @JsonAlias("required_note")
    private RequiredNote requiredNote;
}
