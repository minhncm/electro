package com.ncm.electro.service.chat;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.constant.SearchFields;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.chat.MessageRequest;
import com.ncm.electro.dto.chat.MessageResponse;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.entity.chat.Message;
import com.ncm.electro.entity.chat.Room;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.mapper.chat.MessageMapper;
import com.ncm.electro.repository.authentication.UserRepository;
import com.ncm.electro.repository.chat.MessageRepository;
import com.ncm.electro.repository.chat.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MessageServiceImpl implements MessageService{
    private final MessageRepository messageRepository;
    private final UserRepository userRepository;
    private final RoomRepository roomRepository;
    private final MessageMapper messageMapper;
    @Override
    public ListResponse<MessageResponse> findAll(int page, int size, String sort, String filter, String search, boolean all) {
        return defaultFindAll(page, size, sort, filter, search, all, SearchFields.MESSAGE, messageRepository, messageMapper);
    }

    @Override
    public MessageResponse findById(Long id) {
        return defaultFindById(id, messageRepository, messageMapper, Message.class.getSimpleName());
    }

    @Override
    public MessageResponse save(MessageRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException(User.class.getSimpleName(), FieldName.ID, request.getUserId()));

        Room room = roomRepository.findById(request.getRoomId())
                .orElseThrow(() -> new ResourceNotFoundException(Room.class.getSimpleName(), FieldName.ID, request.getRoomId()));

        Message message = messageMapper.requestToEntity(request);
        message.setUser(user);
        message.setRoom(room);

        Message messageAfterSave = messageRepository.save(message);

        room.setUpdatedAt(Instant.now());
        room.setLastMessage(messageAfterSave);
        roomRepository.save(room);

        return messageMapper.entityToResponse(messageAfterSave);
    }

    @Override
    public MessageResponse save(Long id, MessageRequest request) {
        return defaultSave(id, request, messageRepository, messageMapper, Message.class.getSimpleName());
    }

    @Override
    public void delete(Long id) {
        messageRepository.deleteById(id);
    }

    @Override
    public void delete(List<Long> ids) {
        messageRepository.deleteAllById(ids);
    }
}
