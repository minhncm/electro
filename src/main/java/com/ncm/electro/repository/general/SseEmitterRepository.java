package com.ncm.electro.repository.general;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Optional;

public interface SseEmitterRepository {
    void addEmitter(String uuid, String username, SseEmitter sseEmitter);
    void remove(String uniqueKey);
    Optional<SseEmitter> findByUniqueKey(String uniqueKey);
    Optional<SseEmitter> findByUUID(String uuid);
}
