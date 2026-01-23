package com.ncm.electro.dto.product;

import jakarta.annotation.Nullable;
import lombok.Data;
import tools.jackson.databind.JsonNode;

@Data
public class VariantRequest {
    private Long id;
    private String sku;
    private Double cost;
    private Double price;
    @Nullable
    private JsonNode properties;
    private Integer status;
}
