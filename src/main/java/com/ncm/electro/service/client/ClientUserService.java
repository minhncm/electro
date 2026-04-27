package com.ncm.electro.service.client;

import com.ncm.electro.dto.authentication.UserResponse;

public interface ClientUserService {
    UserResponse findByUsername(String username);
}
