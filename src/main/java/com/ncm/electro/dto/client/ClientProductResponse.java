package com.ncm.electro.dto.client;

import com.fasterxml.jackson.databind.JsonNode;
import com.ncm.electro.dto.genaral.ImageResponse;
import jakarta.annotation.Nullable;
import lombok.Builder;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Builder
public class ClientProductResponse {
    private Long id;
    private String name;
    private String slug;
    private String shortDescription;
    private String description;
    private List<ImageResponse> images;
    @Nullable
    private ClientCategoryResponse category;
    @Nullable
    private ClientBrandResponse brand;
    @Nullable
    private JsonNode specifications;
    private List<ClientVariantResponse> variants;
    private boolean saleable;
    private int soldQuantity;
    private int averageRatingScore;
    private int countReviews;
    private List<ClientListedProductResponse> relateProducts;
    @Nullable
    private ClientPromotionResponse promotion;

    @Data
    @Accessors(chain = true)
    public static class ClientVariantResponse {
        private Long id;
        private Double price;
        @Nullable
        private JsonNode properties;
        private Integer inventory;
    }
}
