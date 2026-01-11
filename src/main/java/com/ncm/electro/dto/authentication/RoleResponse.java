package com.ncm.electro.dto.authentication;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class RoleResponse extends BaseResponse {
    private String name;
    private String code;
    private Integer status;
}
