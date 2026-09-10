package com.ncm.electro.mapper.chat;

import com.ncm.electro.dto.chat.MessageRequest;
import com.ncm.electro.dto.chat.MessageResponse;
import com.ncm.electro.entity.chat.Message;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = {MapperUtils.class})
public interface MessageMapper extends GenericMapper<Message, MessageRequest, MessageResponse> {
    @Override
    @Mapping(source = "userId", target = "user")
    @Mapping(source = "roomId", target = "room")
    Message requestToEntity(MessageRequest request);
}
