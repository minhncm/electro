package com.ncm.electro.service.general;

import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

public interface SseEmitterService {
    SseEmitter createEmitter(String uuid, String username);
}
