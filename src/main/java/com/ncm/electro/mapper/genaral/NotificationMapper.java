package com.ncm.electro.mapper.genaral;

import com.ncm.electro.dto.genaral.NotificationRequest;
import com.ncm.electro.dto.genaral.NotificationResponse;
import com.ncm.electro.entity.general.Notification;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface NotificationMapper extends GenericMapper<Notification, NotificationRequest, NotificationResponse> {
}
