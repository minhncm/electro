package com.ncm.electro.service.general;

import com.ncm.electro.repository.general.SseEmitterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class SseEmitterServiceImpl implements SseEmitterService{
    private final SseEmitterRepository sseEmitterRepository;
    @Override
    public SseEmitter createEmitter(String uuid, String uniqueKey) {
        Long eventTimeout = 60 * 60 * 1000L;
        SseEmitter sseEmitter = new SseEmitter(eventTimeout);
        sseEmitter.onCompletion(() -> sseEmitterRepository.remove(uniqueKey, uuid));
        sseEmitter.onTimeout(() -> sseEmitterRepository.remove(uniqueKey, uuid));
        sseEmitter.onError((e) -> {
            System.out.println("SSE error: " + e.getMessage());
            sseEmitterRepository.remove(uniqueKey, uuid);
        });

        sseEmitterRepository.addEmitter(uniqueKey, uuid, sseEmitter);
        return sseEmitter;
    }

    @Override
    public <T> void pushEvent(String uniqueKey, T event) {
        Map<String, SseEmitter> emitters = sseEmitterRepository.findByUniqueKey(uniqueKey);

        for (Map.Entry<String, SseEmitter> entry : emitters.entrySet()) {
            SseEmitter sseEmitter = entry.getValue();
            try {
                sseEmitter.send(SseEmitter.event().name("message").data(event));
            } catch (Exception e) {
                sseEmitterRepository.remove(uniqueKey, entry.getKey());
                sseEmitter.completeWithError(e);
            }
        }
    }
}
