package com.ncm.electro.service.authentication;

import com.ncm.electro.constant.TokenType;
import com.ncm.electro.dto.authentication.JwtResponse;
import com.ncm.electro.dto.authentication.LoginRequest;
import com.ncm.electro.service.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService{
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    @Override
    public JwtResponse authenticate(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );
        AuthUser user = (AuthUser) authentication.getPrincipal();
        String accessToken = jwtService.generateToken(user, TokenType.ACCESS_TOKEN);
        String refreshToken = jwtService.generateToken(user, TokenType.REFRESH_TOKEN);

        JwtResponse response = new JwtResponse();
        response.setAccessToken(accessToken);
        response.setRefreshToken(refreshToken);
        return response;
    }
}
