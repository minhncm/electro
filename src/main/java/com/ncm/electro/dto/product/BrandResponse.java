package com.ncm.electro.dto.product;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class BrandResponse extends BaseResponse {
    private String name;
    private String code;
    private String description;
    private Integer status;
}
