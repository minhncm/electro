package com.ncm.electro.repository.chat;

import com.ncm.electro.entity.chat.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Long> {
}