package com.ncm.electro.config.security;

import com.ncm.electro.constant.TokenType;
import com.ncm.electro.service.authentication.AuthUserDetailService;
import com.ncm.electro.service.jwt.JwtService;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.util.Pair;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {
    private final JwtService jwtService;
    private final AuthUserDetailService authUserDetailService;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        String token = getTokenFromRequest(request);
        if(token == null || isBypassToken(request)) {
            filterChain.doFilter(request, response);
            return;
        }

        try {
            String username = jwtService.extraUsername(token, TokenType.ACCESS_TOKEN);

            if(StringUtils.hasText(username) && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = authUserDetailService.loadUserByUsername(username);
                if(jwtService.isValidToken(token, TokenType.ACCESS_TOKEN, userDetails)) {
                    SecurityContext securityContext = SecurityContextHolder.createEmptyContext();
                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    securityContext.setAuthentication(authToken);
                    SecurityContextHolder.setContext(securityContext);
                }
            }
        } catch (ExpiredJwtException e) {
            SecurityContextHolder.clearContext();
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType("application/json");
            return;
        }

        filterChain.doFilter(request, response);
    }

    private String getTokenFromRequest(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        if(cookies == null) return null;

        for (Cookie cookie : cookies) {
            if ("accessToken".equals(cookie.getName())) {
                return cookie.getValue();
            }
        }
        return null;
    }

    private boolean isBypassToken(HttpServletRequest request) {
        List<Pair<String, String>> bypassToken = Arrays.asList(
                Pair.of("/api/auth/refresh-token", "POST")
        );

        String servletPath = request.getServletPath();
        String method = request.getMethod();

        return bypassToken.stream().anyMatch(item ->
                servletPath.equals(item.getFirst())
                        && method.equalsIgnoreCase(item.getSecond())
        );
    }
}
