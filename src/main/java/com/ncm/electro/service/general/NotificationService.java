package com.ncm.electro.service.general;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.genaral.NotificationRequest;
import com.ncm.electro.dto.genaral.NotificationResponse;
import com.ncm.electro.entity.general.Notification;

public interface NotificationService {
    ListResponse<NotificationResponse> findAllByUsername(String username, int page, int size, String sort, String filter);
    NotificationResponse pushNotification(Notification notification);
    NotificationResponse updateNotification(Long id, NotificationRequest request);
}
