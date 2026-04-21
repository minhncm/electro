package com.ncm.electro.dto.authentication;

import lombok.Data;

@Data
public class JwtResponse {
    private String message;
    private String accessToken;
    private String refreshToken;
}
