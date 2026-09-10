package com.ncm.electro.dto.chat;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class MessageResponse extends BaseResponse {
    private String content;
    private Integer status;
    private MessageResponse.UserResponse user;

    @Data
    public static class UserResponse {
        private Long id;
        private String username;
        private String fullname;
        private String email;
    }
}
