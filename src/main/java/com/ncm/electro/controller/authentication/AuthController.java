package com.ncm.electro.controller.authentication;

import com.ncm.electro.dto.authentication.JwtResponse;
import com.ncm.electro.dto.authentication.LoginRequest;
import com.ncm.electro.service.authentication.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;
    @PostMapping("/login")
    public ResponseEntity<JwtResponse> authenticateUser(@RequestBody LoginRequest request) {
        return ResponseEntity.status(HttpStatus.OK).body(authService.authenticate(request));
    }
}
