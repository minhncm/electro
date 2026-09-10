package com.ncm.electro.service.general;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseEmitterService {
    SseEmitter createEmitter(String uuid, String uniqueKey);
    <T> void pushEvent(String uniqueKey, T event);
}
