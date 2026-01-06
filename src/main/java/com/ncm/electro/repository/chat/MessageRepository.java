package com.ncm.electro.repository.chat;

import com.ncm.electro.entity.chat.Message;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepository extends JpaRepository<Message, Long> {
}