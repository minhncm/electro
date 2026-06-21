package com.ncm.electro.controller.client;

import com.ncm.electro.constant.AppConstants;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.genaral.NotificationRequest;
import com.ncm.electro.dto.genaral.NotificationResponse;
import com.ncm.electro.service.general.NotificationService;
import com.ncm.electro.service.general.SseEmitterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.UUID;

@RestController
@RequestMapping("/client-api/notifications")
@RequiredArgsConstructor
public class ClientNotificationController {
    private final NotificationService notificationService;
    private final SseEmitterService sseEmitterService;
    @GetMapping()
    public ResponseEntity<ListResponse<NotificationResponse>> getAllNotifications(
            Authentication authentication,
            @RequestParam(name = "page", defaultValue = AppConstants.DEFAULT_PAGE_NUMBER) int page,
            @RequestParam(name = "size", defaultValue = AppConstants.DEFAULT_PAGE_SIZE) int size,
            @RequestParam(name = "sort", defaultValue = AppConstants.DEFAULT_SORT) String sort,
            @RequestParam(name = "filter", required = false) @Nullable String filter
    ) {
        String username = authentication.getName();
        return ResponseEntity.ok(notificationService.findAllByUsername(username, page, size, sort, filter));
    }

    @GetMapping("/events")
    public SseEmitter subscribeNotificationEvents(Authentication authentication) {
        String username = authentication.getName();
        String uuid = UUID.randomUUID().toString();
        return sseEmitterService.createEmitter(uuid, username);
    }

    @PutMapping("/{id}")
    public ResponseEntity<NotificationResponse> updateNotification(
            @PathVariable Long id,
            @RequestBody NotificationRequest request) {
        NotificationResponse response = notificationService.updateNotification(id, request);
        return ResponseEntity.ok(response);
    }
}
