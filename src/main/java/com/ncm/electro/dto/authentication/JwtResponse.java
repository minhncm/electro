package com.ncm.electro.dto.authentication;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
public class JwtResponse {
    private String message;
    private String accessToken;
    private String refreshToken;
}
