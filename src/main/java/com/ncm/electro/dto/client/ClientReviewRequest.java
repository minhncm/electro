package com.ncm.electro.dto.client;

import lombok.Data;

@Data
public class ClientReviewRequest {
    private Long userId;
    private Long productId;
    private Integer ratingScore;
    private String content;
    private Integer status;
}
