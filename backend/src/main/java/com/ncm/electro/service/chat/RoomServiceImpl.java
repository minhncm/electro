package com.ncm.electro.service.chat;

import com.ncm.electro.dto.chat.ClientRoomExistenceResponse;
import com.ncm.electro.dto.chat.RoomResponse;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.entity.chat.Message;
import com.ncm.electro.entity.chat.Room;
import com.ncm.electro.mapper.chat.MessageMapper;
import com.ncm.electro.mapper.chat.RoomMapper;
import com.ncm.electro.repository.authentication.UserRepository;
import com.ncm.electro.repository.chat.MessageRepository;
import com.ncm.electro.repository.chat.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;
    private final MessageRepository messageRepository;
    private final RoomMapper roomMapper;
    private final MessageMapper messageMapper;

    @Override
    public RoomResponse createRoom(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));

        Room room = new Room();
        room.setName(username);
        room.setUser(user);

        Room roomAfterSave = roomRepository.save(room);
        return roomMapper.entityToResponse(roomAfterSave);
    }

    @Override
    public ClientRoomExistenceResponse getRoom(String username) {
        RoomResponse roomResponse = roomRepository.findByUserUsername(username)
                .map(roomMapper::entityToResponse)
                .orElse(null);

        ClientRoomExistenceResponse clientRoomExistenceResponse = new ClientRoomExistenceResponse();
        clientRoomExistenceResponse.setRoomExistence(roomResponse != null);
        clientRoomExistenceResponse.setRoomResponse(roomResponse);
        List<Message> recentMessages = roomResponse != null
                ? messageRepository
                    .findByRoomId(
                            roomResponse.getId(),
                            PageRequest.of(0, 20, Sort.by(Sort.Direction.DESC, "id"))
                    )
                    .stream()
                    .sorted(Comparator.comparing(Message::getId))
                    .toList()
                : Collections.emptyList();

        clientRoomExistenceResponse.setRoomRecentMessages(messageMapper.entityToResponse(recentMessages));

        return clientRoomExistenceResponse;
    }
}
