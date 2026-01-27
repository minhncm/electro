package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.product.VariantResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import tools.jackson.databind.JsonNode;

@Data
public class PurchaseOrderVariantResponse {
    private PurchaseOrderVariantResponse.VariantResponse variant;
    private Double cost;
    private Integer quantity;
    private Double amount;

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class VariantResponse extends BaseResponse {
        private PurchaseOrderVariantResponse.VariantResponse.ProductResponse product;
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
