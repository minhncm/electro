package com.ncm.electro.dto.authentication;

import lombok.Data;

@Data
public class RoleRequest {
    private String name;
    private String code;
    private Integer status;
}
