package com.ncm.electro.dto.cashbook;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.entity.cashbook.PaymentMethodType;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class PaymentMethodResponse extends BaseResponse {
    private String name;
    private PaymentMethodType code;
    private Integer status;
}
