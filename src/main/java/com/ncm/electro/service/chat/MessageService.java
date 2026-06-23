package com.ncm.electro.service.chat;

import com.ncm.electro.dto.chat.MessageRequest;
import com.ncm.electro.dto.chat.MessageResponse;
import com.ncm.electro.service.CrudService;

public interface MessageService extends CrudService<Long, MessageRequest, MessageResponse> {
}
