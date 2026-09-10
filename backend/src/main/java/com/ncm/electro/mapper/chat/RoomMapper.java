package com.ncm.electro.mapper.chat;

import com.ncm.electro.dto.chat.RoomRequest;
import com.ncm.electro.dto.chat.RoomResponse;
import com.ncm.electro.entity.chat.Room;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RoomMapper extends GenericMapper<Room, RoomRequest, RoomResponse> {
}
