package com.ncm.electro.dto.client;

import lombok.Data;

import java.time.Instant;

@Data
public class ClientWishResponse {
    private Long id;
    private Instant createdAt;
    private ClientProductResponse product;

    @Data
    public static class ClientProductResponse {
        private Long id;
        private String name;
        private String slug;
        private String thumbnail;
    }
}
