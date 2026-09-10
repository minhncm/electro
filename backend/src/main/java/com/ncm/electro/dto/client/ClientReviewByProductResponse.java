package com.ncm.electro.dto.client;

import lombok.Data;

@Data
public class ClientReviewByProductResponse {
    private Long id;
    private UserResponse user;
    private int ratingScore;
    private String content;
    private String reply;
    private String status;

    @Data
    public static class UserResponse {
        private String fullname;
    }
}
