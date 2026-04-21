package com.ncm.electro.controller.client;

import com.ncm.electro.dto.client.ClientRewardResponse;
import com.ncm.electro.service.client.ClientRewardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client-api/rewards")
@RequiredArgsConstructor
public class ClientRewardController {
    private final ClientRewardService clientRewardService;
    @GetMapping
    public ResponseEntity<ClientRewardResponse> getReward(Authentication authentication) {
        String username = authentication.getName();
        return ResponseEntity.status(HttpStatus.OK).body(clientRewardService.findByUsername(username));
    }
}
