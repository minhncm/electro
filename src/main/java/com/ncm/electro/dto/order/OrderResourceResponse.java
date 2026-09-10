package com.ncm.electro.dto.order;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.customer.CustomerResourceResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class OrderResourceResponse extends BaseResponse {
    private String code;
    private String name;
    private String color;
    @Nullable
    private CustomerResourceResponse customerResource;
    private Integer status;
}
