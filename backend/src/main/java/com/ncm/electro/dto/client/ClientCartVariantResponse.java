package com.ncm.electro.dto.client;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Data;

import java.util.List;

@Data
public class ClientCartVariantResponse {
    private ClientVariantResponse variant;
    private Integer quantity;

    @Data
    public static class ClientVariantResponse {
        private Long id;
        private ClientProductResponse product;
        private Double price;
        private JsonNode properties;
        private Integer inventory;

        @Data
        public static class ClientProductResponse {
            private Integer id;
            private String name;
            private String slug;
            private String thumbnail;
            private List<ClientPromotionResponse> promotions;
        }
    }
}
