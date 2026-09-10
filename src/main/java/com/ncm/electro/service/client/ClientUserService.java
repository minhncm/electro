package com.ncm.electro.service.client;

import com.ncm.electro.dto.authentication.UserResponse;
import com.ncm.electro.dto.client.ClientEmailSettingUserRequest;
import com.ncm.electro.dto.client.ClientPasswordSettingUserRequest;
import com.ncm.electro.dto.client.ClientPersonalSettingUserRequest;
import com.ncm.electro.dto.client.ClientPhoneSettingUserRequest;

public interface ClientUserService {
    UserResponse findByUsername(String username);
    UserResponse updatePersonal(String username, ClientPersonalSettingUserRequest request);
    UserResponse updatePhone(String username, ClientPhoneSettingUserRequest request);
    UserResponse updateEmail(String username, ClientEmailSettingUserRequest request);
    UserResponse updatePassword(String username, ClientPasswordSettingUserRequest request);
}
