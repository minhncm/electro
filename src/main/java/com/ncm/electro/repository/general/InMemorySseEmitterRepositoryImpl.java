package com.ncm.electro.repository.general;

import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Collections;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;


@Repository
public class InMemorySseEmitterRepositoryImpl implements SseEmitterRepository{
    private final Map<String, Map<String, SseEmitter>> emitterMap = new ConcurrentHashMap<>(); // Map<username, <uuid, sseEmitter>>
    @Override
    public void addEmitter(String uniqueKey, String uuid, SseEmitter sseEmitter) {
        if(!emitterMap.containsKey(uniqueKey)) {
            emitterMap.put(uniqueKey, new ConcurrentHashMap<>());
        }
        emitterMap.get(uniqueKey).put(uuid, sseEmitter);
    }

    @Override
    public Map<String, SseEmitter> findByUniqueKey(String uniqueKey) {
        return emitterMap.getOrDefault(uniqueKey, Collections.emptyMap());
    }

    @Override
    public void remove(String uniqueKey, String uuid) {
        Map<String, SseEmitter> emitters = emitterMap.get(uniqueKey);
        if(emitters != null) {
            emitters.remove(uuid);

            if(emitters.isEmpty()) {
                emitterMap.remove(uniqueKey);
            }
        }
    }
}
