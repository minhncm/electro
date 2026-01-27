package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.product.SupplierResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class PurchaseOrderResponse extends BaseResponse {
    private String code;
    private SupplierResponse supplier;
    private DestinationResponse destination;
    private Double totalAmount;
    @Nullable
    private String note;
    private Integer status;
    private Set<PurchaseOrderVariantResponse> purchaseOrderVariants;

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class DocketResponse extends BaseResponse{
        private Integer type;
        private String code;
        private PurchaseOrderResponse.DocketResponse.WarehouseResponse warehouse;
        private Integer status;

        @Data
        @EqualsAndHashCode(callSuper = true)
        public static class WarehouseResponse extends BaseResponse{
            private String code;
            private String name;
            private Integer status;
        }
    }
}
