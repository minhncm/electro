package com.ncm.electro.service.authentication;

import com.ncm.electro.dto.authentication.*;

public interface AuthService {
    JwtResponse authenticate(LoginRequest request);
    JwtResponse recreateToken(String refreshToken);
    Long registerUser(UserRequest userRequest);
    void confirmRegistration(RegistrationRequest registrationRequest);
    void resendVerificationToken(Long userId);
    void forgotPassword(String email);
    void resetPassword(ResetPasswordRequest request);

}
