package com.ncm.electro.dto.client;

import lombok.Data;
import org.springframework.lang.Nullable;

import java.time.Instant;

@Data
public class ClientReviewResponse {
    private Long id;
    private Instant createdAt;
    private Instant updatedAt;
    private ClientListedProductResponse product;
    private Integer ratingScore;
    private String content;
    @Nullable
    private String reply;
    private Integer status;
}
