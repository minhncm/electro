package com.ncm.electro.dto.chat;

import lombok.Data;

@Data
public class MessageRequest {
    private String content;
    private Integer status;
    private Long userId;
    private Long roomId;
}
