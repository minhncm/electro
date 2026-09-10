package com.ncm.electro.controller.client;

import com.ncm.electro.dto.chat.ClientRoomExistenceResponse;
import com.ncm.electro.dto.chat.RoomResponse;
import com.ncm.electro.service.chat.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/client-api/chat")
@RequiredArgsConstructor
public class ClientChatController {
    private final RoomService roomService;
    @PostMapping("/create-room")
    public ResponseEntity<RoomResponse> createRoom(Authentication authentication) {
        String username = authentication.getName();
        return ResponseEntity.ok(roomService.createRoom(username));
    }

    @GetMapping("/get-room")
    public ResponseEntity<ClientRoomExistenceResponse> getRoom(Authentication authentication) {
        String username = authentication.getName();
        return ResponseEntity.ok(roomService.getRoom(username));
    }
}