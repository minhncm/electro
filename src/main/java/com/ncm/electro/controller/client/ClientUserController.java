package com.ncm.electro.controller.client;

import com.ncm.electro.dto.authentication.UserResponse;
import com.ncm.electro.dto.client.ClientEmailSettingUserRequest;
import com.ncm.electro.dto.client.ClientPasswordSettingUserRequest;
import com.ncm.electro.dto.client.ClientPersonalSettingUserRequest;
import com.ncm.electro.dto.client.ClientPhoneSettingUserRequest;
import com.ncm.electro.service.client.ClientUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

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

    @PatchMapping("/personal")
    public ResponseEntity<UserResponse> updatePersonalSetting(
            Authentication authentication,
            @RequestBody ClientPersonalSettingUserRequest request){
        String username = authentication.getName();
        return ResponseEntity.ok(clientUserService.updatePersonal(username, request));
    }

    @PatchMapping("/phone")
    public ResponseEntity<UserResponse> updatePhoneSetting(
            Authentication authentication,
            @RequestBody ClientPhoneSettingUserRequest request){
        String username = authentication.getName();
        return ResponseEntity.ok(clientUserService.updatePhone(username, request));
    }

    @PatchMapping("/email")
    public ResponseEntity<UserResponse> updateEmailSetting(
            Authentication authentication,
            @RequestBody ClientEmailSettingUserRequest request){
        String username = authentication.getName();
        return ResponseEntity.ok(clientUserService.updateEmail(username, request));
    }

    @PatchMapping("/password")
    public ResponseEntity<UserResponse> updatePasswordSetting(
            Authentication authentication,
            @RequestBody ClientPasswordSettingUserRequest request){
        String username = authentication.getName();
        return ResponseEntity.ok(clientUserService.updatePassword(username, request));
    }
}
