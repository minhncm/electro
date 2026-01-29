package com.ncm.electro.dto.order;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.inventory.DocketVariantResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import tools.jackson.databind.JsonNode;

import java.math.BigDecimal;

@Data
public class OrderVariantResponse {
    private OrderVariantResponse.VariantResponse variant;
    private BigDecimal price;
    private Integer quantity;
    private BigDecimal amount;

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class VariantResponse extends BaseResponse {
        private OrderVariantResponse.VariantResponse.ProductResponse product;
        private String sku;
        private Double cost;
        private Double price;
        @Nullable
        private JsonNode properties;
        private Integer status;

        @Data
        @EqualsAndHashCode(callSuper = true)
        public static class ProductResponse extends BaseResponse {
            private String name;
            private String code;
            private String slug;
        }
    }
}
