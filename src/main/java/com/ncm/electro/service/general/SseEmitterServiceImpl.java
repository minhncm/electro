package com.ncm.electro.service.general;

import com.ncm.electro.repository.general.SseEmitterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SseEmitterServiceImpl implements SseEmitterService{
    private final SseEmitterRepository sseEmitterRepository;
    @Override
    public SseEmitter createEmitter(String uuid, String uniqueKey) {
        Optional<SseEmitter> existing = sseEmitterRepository.findByUniqueKey(uniqueKey);
        if(existing.isPresent()) {
            existing.get().complete();
            sseEmitterRepository.remove(uniqueKey);
        }

        Long eventTimeout = 60 * 60 * 1000L;
        SseEmitter sseEmitter = new SseEmitter(eventTimeout);
        sseEmitter.onCompletion(() -> sseEmitterRepository.remove(uniqueKey));
        sseEmitter.onTimeout(() -> sseEmitterRepository.remove(uniqueKey));
        sseEmitter.onError((e) -> {
            System.out.println("SSE error: " + e.getMessage());
            sseEmitterRepository.remove(uniqueKey);
        });

        sseEmitterRepository.addEmitter(uuid, uniqueKey, sseEmitter);
        return sseEmitter;
    }

    @Override
    public <T> void pushEvent(String uniqueKey, T event) {
        SseEmitter sseEmitter = sseEmitterRepository.findByUniqueKey(uniqueKey)
                .orElseThrow(() -> new RuntimeException("Don't exist SseEmitter with uniqueKey: " + uniqueKey));
        try {
            sseEmitter.send(SseEmitter.event().name("message").data(event));
        } catch (IOException e) {
            sseEmitterRepository.remove(uniqueKey);
            sseEmitter.completeWithError(e);
            throw new RuntimeException(e);
        }
    }
}
