package com.ncm.electro.service.general;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.genaral.NotificationResponse;

public interface NotificationService {
    ListResponse<NotificationResponse> findAllByUsername(String username, int page, int size, String sort, String filter);
}
