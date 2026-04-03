package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;
import tools.jackson.databind.JsonNode;

@Data
public class DocketVariantExtendedResponse {
    private DocketVariantExtendedResponse.DocketResponse docket;
    private DocketVariantExtendedResponse.VariantResponse variant;
    private Integer quantity;

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class DocketResponse extends BaseResponse {
        private Integer type;
        private String code;
        private DocketReasonResponse reason;
        private WarehouseResponse warehouse;
        private DocketVariantExtendedResponse.DocketResponse.PurchaseOrderResponse purchaseOrder;
        private DocketVariantExtendedResponse.DocketResponse.OrderResponse order;
        private Integer status;

        @Data
        @EqualsAndHashCode(callSuper = true)
        public static class PurchaseOrderResponse extends BaseResponse{
            private String code;
            private Integer status;
        }

        @Data
        @EqualsAndHashCode(callSuper = true)
        public static class OrderResponse extends BaseResponse {
            private String code;
            private Integer status;
        }
    }

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class VariantResponse extends BaseResponse {
        private String sku;
        private JsonNode properties;
        private Integer status;
    }
}
