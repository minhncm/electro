package com.ncm.electro.dto.client;

import com.fasterxml.jackson.databind.JsonNode;
import lombok.Data;

@Data
public class ClientOrderVariantResponse {
    private ClientVariantResponse variant;
    private Double price;
    private Integer quantity;
    private Double amount;
    @Data
    public static class ClientVariantResponse {
        private Long id;
        private ClientProductResponse product;
        private JsonNode properties;

        @Data
        public static class ClientProductResponse {
            private Long id;
            private String name;
            private String slug;
            private String thumbnail;
            private boolean reviewed;
        }
    }
}
