package com.ncm.electro.dto.customer;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class CustomerResourceResponse extends BaseResponse {
    private String code;
    private String name;
    private String Description;
    private String color;
    private Integer status;
}
