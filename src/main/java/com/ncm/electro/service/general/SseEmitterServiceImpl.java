package com.ncm.electro.service.general;

import com.ncm.electro.repository.general.SseEmitterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SseEmitterServiceImpl implements SseEmitterService{
    private final SseEmitterRepository sseEmitterRepository;
    @Override
    public SseEmitter createEmitter(String uuid, String username) {
        Optional<SseEmitter> existing = sseEmitterRepository.findByUsername(username);
        if(existing.isPresent()) {
            existing.get().complete();
            sseEmitterRepository.remove(username);
        }

        Long eventTimeout = 60 * 60 * 1000L;
        SseEmitter sseEmitter = new SseEmitter(eventTimeout);
        sseEmitter.onCompletion(() -> sseEmitterRepository.remove(username));
        sseEmitter.onTimeout(() -> sseEmitterRepository.remove(username));
        sseEmitter.onError((e) -> {
            sseEmitterRepository.remove(username);
            throw new RuntimeException(e.getMessage());
        });

        sseEmitterRepository.addEmitter(uuid, username, sseEmitter);
        return sseEmitter;
    }
}
