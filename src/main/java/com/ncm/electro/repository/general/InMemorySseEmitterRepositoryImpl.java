package com.ncm.electro.repository.general;

import org.springframework.stereotype.Repository;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;

//TODO: hien tai 1 user -> 1 emitter, sua lai thanh 1 user -> n emitter ==> Map<String, Map<String, SseEmitter>>
//TODO: khi reload lai website thi emitter cua user bi mat, dang le phai tao 1 emitter moi repalce cai cu
@Repository
public class InMemorySseEmitterRepositoryImpl implements SseEmitterRepository{
    private final Map<String, String> uuidEmitterMap = new ConcurrentHashMap<>(); // Map<uuid, username>
    private final Map<String, SseEmitter> emitterMap = new ConcurrentHashMap<>(); // Map<username, sseEmitter>

    @Override
    public void addEmitter(String uuid, String uniqueKey, SseEmitter sseEmitter) {
        remove(uniqueKey);
        uuidEmitterMap.put(uuid, uniqueKey);
        emitterMap.put(uniqueKey, sseEmitter);
    }

    @Override
    public Optional<SseEmitter> findByUniqueKey(String uniqueKey) {
        return Optional.ofNullable(emitterMap.get(uniqueKey));
    }

    @Override
    public void remove(String uniqueKey) {
        uuidEmitterMap.entrySet().removeIf(entry -> entry.getValue().equals(uniqueKey));
        emitterMap.remove(uniqueKey);
    }

    @Override
    public Optional<SseEmitter> findByUUID(String uuid) {
        return Optional.ofNullable(uuidEmitterMap.get(uuid)).map(emitterMap::get);
    }
}
