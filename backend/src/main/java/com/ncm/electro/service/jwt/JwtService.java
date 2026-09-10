package com.ncm.electro.service.jwt;

import com.ncm.electro.constant.TokenType;
import org.springframework.security.core.userdetails.UserDetails;

public interface JwtService {
    String extraUsername(String token, TokenType type);
    String generateToken(UserDetails userDetails, TokenType type);
    boolean isValidToken(String token, TokenType type, UserDetails userDetails);

}
