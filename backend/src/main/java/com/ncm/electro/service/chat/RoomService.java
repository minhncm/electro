package com.ncm.electro.service.chat;

import com.ncm.electro.dto.chat.ClientRoomExistenceResponse;
import com.ncm.electro.dto.chat.RoomResponse;

public interface RoomService {
    RoomResponse createRoom(String username);

    ClientRoomExistenceResponse getRoom(String username);
}
