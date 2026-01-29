package com.ncm.electro.mapper.chat;

import com.ncm.electro.dto.chat.MessageRequest;
import com.ncm.electro.dto.chat.MessageResponse;
import com.ncm.electro.entity.chat.Message;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MessageMapper extends GenericMapper<Message, MessageRequest, MessageResponse> {
}
