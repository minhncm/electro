package com.ncm.electro.dto.authentication;

import lombok.Value;

@Value
public class RegistrationResponse {
    Long userId;
    boolean verificationRequired;
    String message;
}
