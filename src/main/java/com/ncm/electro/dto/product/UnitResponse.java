package com.ncm.electro.dto.product;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class UnitResponse extends BaseResponse {
    private String name;
    private Integer status;
}
