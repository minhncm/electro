package com.ncm.electro.dto.client;

import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.Nullable;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class ClientListedProductResponse {
    private Long id;
    private String name;
    private String slug;
    @Nullable
    private List<ClientListedVariantResponse> variants;
    private String thumbnail;
    private List<Double> priceRange;
    private boolean saleable;
    @Nullable
    private ClientPromotionResponse promotion;

    @Data
    @Builder
    public static class ClientListedVariantResponse {
        private Long id;
        private Double price;
        @Nullable
        private JsonNode properties;
    }
}
