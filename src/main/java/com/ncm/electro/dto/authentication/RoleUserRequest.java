package com.ncm.electro.dto.authentication;

import lombok.Data;

@Data
public class RoleUserRequest {
    private Long id;
    private String name;
    private String code;
    private Integer status;
}
