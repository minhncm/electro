package com.ncm.electro.dto.authentication;

import lombok.Data;

@Data
public class JwtResponse {
    private String accessToken;
    private String refreshToken;
}
