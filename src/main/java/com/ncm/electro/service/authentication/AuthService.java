package com.ncm.electro.service.authentication;

import com.ncm.electro.dto.authentication.JwtResponse;
import com.ncm.electro.dto.authentication.LoginRequest;

public interface AuthService {
    JwtResponse authenticate(LoginRequest request);
}
