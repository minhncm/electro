package com.ncm.electro.dto.authentication;

import lombok.Data;

@Data
public class RegistrationRequest {
    private Long userId;
    private String token;
}
