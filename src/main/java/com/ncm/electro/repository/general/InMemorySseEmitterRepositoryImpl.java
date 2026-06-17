package com.ncm.electro.repository.general;

import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class InMemorySseEmitterRepositoryImpl implements SseEmitterRepository{
    private final Map<String, String> uuidEmitterMap = new ConcurrentHashMap<>(); // Map<uuid, username>
    private final Map<String, SseEmitter> emitterMap = new ConcurrentHashMap<>(); // Map<username, sseEmitter>

    @Override
    public void addEmitter(String uuid, String username, SseEmitter sseEmitter) {
        remove(username);
        uuidEmitterMap.put(uuid, username);
        emitterMap.put(username, sseEmitter);
    }

    @Override
    public Optional<SseEmitter> findByUsername(String username) {
        return Optional.ofNullable(emitterMap.get(username));
    }

    @Override
    public void remove(String username) {
        uuidEmitterMap.entrySet().removeIf(entry -> entry.getValue().equals(username));
        emitterMap.remove(username);
    }

    @Override
    public Optional<SseEmitter> findByUUID(String uuid) {
        return Optional.ofNullable(uuidEmitterMap.get(uuid)).map(emitterMap::get);
    }
}
