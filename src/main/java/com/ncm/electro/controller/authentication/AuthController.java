package com.ncm.electro.controller.authentication;

import com.ncm.electro.dto.authentication.*;
import com.ncm.electro.service.authentication.AuthService;
import com.ncm.electro.service.client.ClientUserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    @Value("${jwt.expiration-hour}")
    private long expirationHour;
    @Value("${jwt.expiration-day}")
    private long expirationDay;

    private final AuthService authService;
    private final ClientUserService clientUserService;

    @PostMapping("/registration")
    public ResponseEntity<RegistrationResponse> registerUser(@RequestBody UserRequest userRequest) {
        Long userId = authService.registerUser(userRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(
                new RegistrationResponse(
                        userId,
                        true,
                        "OTP has been sent to your email")
        );
    }

    @PostMapping("/registration/confirm")
    public ResponseEntity<?> confirmRegistration(@RequestBody RegistrationRequest registrationRequest) {
        authService.confirmRegistration(registrationRequest);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/registration/{userId}/resend-token")
    public ResponseEntity<?> resendRegistrationToken(@PathVariable Long userId) {
        authService.resendVerificationToken(userId);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponse> login(@RequestBody LoginRequest request, HttpServletResponse response) {
        JwtResponse jwtResponse = authService.authenticate(request);
        String accessToken = jwtResponse.getAccessToken();
        ResponseCookie accessTokenCookie = ResponseCookie.from("accessToken", accessToken)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(Duration.ofHours(expirationHour))
                .sameSite("Strict")
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, accessTokenCookie.toString());

        String refreshToken = jwtResponse.getRefreshToken();
        ResponseCookie refreshTokenCookie = ResponseCookie.from("refreshToken", refreshToken)
                .httpOnly(true)
                .secure(true)
                .path("/api/auth/refresh-token")
                .maxAge( Duration.ofDays(expirationDay))
                .sameSite("Strict")
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, refreshTokenCookie.toString());

        return ResponseEntity.ok(clientUserService.findByUsername(request.getUsername()));
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpServletResponse response) {
        ResponseCookie accessTokenCookie = ResponseCookie.from("accessToken", "")
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(0)
                .sameSite("Strict")
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, accessTokenCookie.toString());

        ResponseCookie refreshTokenCookie = ResponseCookie.from("refreshToken", "")
                .httpOnly(true)
                .secure(true)
                .path("/auth/refresh")
                .maxAge(0)
                .sameSite("Strict")
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, refreshTokenCookie.toString());
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(
            @CookieValue(name = "refreshToken", required = false) String refreshToken,
            HttpServletResponse response) {
        JwtResponse jwtResponse = authService.recreateToken(refreshToken);
        String newAccessToken = jwtResponse.getAccessToken();
        ResponseCookie accessTokenCookie = ResponseCookie.from("accessToken", newAccessToken)
                .httpOnly(true)
                .secure(true)
                .path("/")
                .maxAge(Duration.ofHours(expirationHour))
                .sameSite("Strict")
                .build();
        response.addHeader(HttpHeaders.SET_COOKIE, accessTokenCookie.toString());
        return ResponseEntity.ok().build();
    }

    @GetMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestParam String email) {
        authService.forgotPassword(email);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
        authService.resetPassword(request);
        return ResponseEntity.ok().build();
    }
}
