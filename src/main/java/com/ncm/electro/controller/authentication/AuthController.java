package com.ncm.electro.controller.authentication;

import com.ncm.electro.dto.authentication.JwtResponse;
import com.ncm.electro.dto.authentication.LoginRequest;
import com.ncm.electro.dto.authentication.UserResponse;
import com.ncm.electro.service.authentication.AuthService;
import com.ncm.electro.service.client.ClientUserService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
                .path("/api/auth/refresh")
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
}
