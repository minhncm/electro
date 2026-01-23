package com.ncm.electro.dto.product;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.genaral.ImageRequest;
import com.ncm.electro.dto.genaral.ImageResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;
import tools.jackson.databind.JsonNode;

import java.util.List;
import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class ProductResponse extends BaseResponse {
    private String name;
    private String code;
    private String slug;
    @Nullable
    private String shortDescription;
    @Nullable
    private String description;
    private Integer status;
    @Nullable
    private ProductResponse.CategoryResponse category;
    @Nullable
    private BrandResponse brand;
    @Nullable
    private SupplierResponse supplier;
    @Nullable
    private UnitResponse unit;
    @Nullable
    private JsonNode specifications;
    @Nullable
    private JsonNode properties;
    @Nullable
    private Double weight;
    private Long guaranteeId;
    private List<ImageResponse> images;
    private List<ProductResponse.VariantResponse> variants;
    private Set<TagResponse> tags;

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class CategoryResponse extends BaseResponse {
        private String name;
        private String slug;
        @Nullable
        private String description;
        private String thumbnail;
        private Integer status;
    }

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class VariantResponse extends BaseResponse {
        private String sku;
        private Double cost;
        private Double price;
        @Nullable
        private JsonNode properties;
        private Integer status;
    }
}
