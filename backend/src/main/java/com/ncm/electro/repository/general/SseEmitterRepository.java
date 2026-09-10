package com.ncm.electro.repository.general;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Map;

public interface SseEmitterRepository {
    void addEmitter( String uniqueKey, String uuid, SseEmitter sseEmitter);
    void remove(String uniqueKey, String uuid);
    Map<String, SseEmitter> findByUniqueKey(String uniqueKey);
}
