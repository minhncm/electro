package com.ncm.electro.dto.review;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.entity.product.Product;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class ReviewResponse extends BaseResponse {
    private ReviewResponse.UserResponse user;
    private ReviewResponse.ProductResponse product;
    private Integer ratingScore;
    private String content;
    @Nullable
    private String reply;
    private Integer status;

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class UserResponse extends BaseResponse{
        private String username;
        private String fullname;
    }

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class ProductResponse extends BaseResponse{
        private String name;
        private String code;
        private String slug;
    }
}
