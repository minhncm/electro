package com.ncm.electro.dto.client;

import lombok.Data;

import java.time.Instant;

@Data
public class ClientWishResponse {
    private Long id;
    private Instant createdAt;
    private ClientListedProductResponse product;
}
