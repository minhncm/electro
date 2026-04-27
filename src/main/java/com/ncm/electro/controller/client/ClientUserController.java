package com.ncm.electro.controller.client;

import com.ncm.electro.dto.authentication.UserResponse;
import com.ncm.electro.service.client.ClientUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client-api/users")
@RequiredArgsConstructor
public class ClientUserController {
    private final ClientUserService clientUserService;
    @GetMapping("/info")
    public ResponseEntity<UserResponse> getCurrentUser(Authentication authentication) {
        String username = authentication.getName();
        return ResponseEntity.status(HttpStatus.OK).body(clientUserService.findByUsername(username));
    }
}
