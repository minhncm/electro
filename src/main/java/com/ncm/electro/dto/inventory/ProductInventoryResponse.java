package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.product.BrandResponse;
import com.ncm.electro.dto.product.SupplierResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
public class ProductInventoryResponse {
    private ProductInventoryResponse.ProductResponse product;
    private List<DocketVariantExtendedResponse> transactions;
    private Integer inventory;
    private Integer waitingForDelivery;
    private Integer available;
    private Integer incoming;
    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class ProductResponse extends BaseResponse {
        private String name;
        private String code;
        private String slug;
        @Nullable
        private BrandResponse brand;
        @Nullable
        private SupplierResponse supplier;
    }
}
