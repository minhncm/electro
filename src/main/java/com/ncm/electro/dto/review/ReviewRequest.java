package com.ncm.electro.dto.review;

import com.ncm.electro.entity.product.Product;
import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class ReviewRequest {
    private Long userId;
    private Product product;
    private Integer ratingScore;
    private String content;
    @Nullable
    private String reply;
    private Integer status;
}
