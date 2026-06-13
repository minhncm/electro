package com.ncm.electro.service.authentication;

import com.ncm.electro.dto.authentication.JwtResponse;
import com.ncm.electro.dto.authentication.LoginRequest;
import com.ncm.electro.dto.authentication.RegistrationRequest;
import com.ncm.electro.dto.authentication.UserRequest;

public interface AuthService {
    JwtResponse authenticate(LoginRequest request);
    JwtResponse recreateToken(String refreshToken);
    Long registerUser(UserRequest userRequest);
    void confirmRegistration(RegistrationRequest registrationRequest);
    void resendVerificationToken(Long userId);
}
