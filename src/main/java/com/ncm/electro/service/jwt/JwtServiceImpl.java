package com.ncm.electro.service.jwt;

import com.ncm.electro.constant.TokenType;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtServiceImpl implements JwtService{
    @Value("${jwt.access-key}")
    private String accessKey;

    @Value("${jwt.refresh-key}")
    private String refreshKey;

    @Value("${jwt.expiration-hour}")
    private long expirationHour;

    @Value("${jwt.expiration-day}")
    private long expirationDay;

    @Override
    public String extraUsername(String token, TokenType type) {
        return extraClaim(token, type, Claims::getSubject);
    }

    @Override
    public String generateToken(UserDetails userDetails, TokenType type) {
         return Jwts.builder()
                 .subject(userDetails.getUsername())
                 .issuedAt(new Date(System.currentTimeMillis()))
                 .expiration(new Date(System.currentTimeMillis() + calculateExpiration(type)))
                 .signWith(getKey(type))
                 .compact();
    }

    @Override
    public boolean isValidToken(String token, TokenType type, UserDetails userDetails) {
        String username = extraUsername(token, type);
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token, type);
    }

    private <T> T extraClaim(String token, TokenType type, Function<Claims, T> claimsResolvers) {
        Claims claims = extraAllClaims(token, type);
        return claimsResolvers.apply(claims);
    }

    private Claims extraAllClaims(String token, TokenType type) {
        return Jwts.parser()
                .verifyWith(getKey(type))
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    private SecretKey getKey(TokenType type) {
        switch (type) {
            case ACCESS_TOKEN -> { return Keys.hmacShaKeyFor(Decoders.BASE64.decode(accessKey)); }
            case REFRESH_TOKEN -> { return Keys.hmacShaKeyFor(Decoders.BASE64.decode(refreshKey)); }
            default -> throw new RuntimeException("Type key not found");
        }
    }

    private long calculateExpiration(TokenType type) {
        switch (type) {
            case ACCESS_TOKEN -> { return 1000 * 60 * 60 * expirationHour; }
            case REFRESH_TOKEN -> { return 1000 * 60 * 60 * 24 * expirationDay; }
            default -> throw new RuntimeException("Type key not found");
        }
    }

    private boolean isTokenExpired(String token, TokenType type){
        return extraClaim(token, type, Claims::getExpiration).before(new Date());
    }

}
