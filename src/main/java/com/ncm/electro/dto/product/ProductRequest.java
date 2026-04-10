package com.ncm.electro.dto.product;

import com.fasterxml.jackson.databind.JsonNode;
import com.ncm.electro.dto.genaral.ImageRequest;
import jakarta.annotation.Nullable;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Data
public class ProductRequest {
    private String name;
    private String code;
    private String slug;
    @Nullable
    private String shortDescription;
    @Nullable
    private String description;
    private Integer status;
    @Nullable
    private Long categoryId;
    @Nullable
    private Long brandId;
    @Nullable
    private Long supplierId;
    @Nullable
    private Integer unitId;
    @Nullable
    private JsonNode specifications;
    @Nullable
    private JsonNode properties;
    @Nullable
    private Double weight;
    private Long guaranteeId;
    private List<ImageRequest> images;
    private List<VariantRequest> variants;
    private Set<ProductRequest.tagRequest> tags;

    @Data
    public static class tagRequest {
        private Long id;
        private String name;
        private String slug;
        private String status;
    }
}
