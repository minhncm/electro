package com.ncm.electro.dto.chat;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class RoomResponse extends BaseResponse {
    private String name;
    private RoomResponse.UserResponse user;
    private MessageResponse lastMessage;

    @Data
    public static class UserResponse {
        private Long id;
        private String username;
        private String fullname;
        private String email;
    }
}
