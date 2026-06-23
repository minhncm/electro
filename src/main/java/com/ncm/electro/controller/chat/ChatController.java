package com.ncm.electro.controller.chat;

import com.ncm.electro.dto.chat.MessageRequest;
import com.ncm.electro.dto.chat.MessageResponse;
import com.ncm.electro.service.chat.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class ChatController {
    private final MessageService messageService;
    private final SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/{roomId}")
    public void sendMessage(@DestinationVariable String roomId, @Payload MessageRequest request) {
        MessageResponse messageResponse = messageService.save(request);
        simpMessagingTemplate.convertAndSend("/chat/receive/" + roomId, messageResponse);
    }


}
