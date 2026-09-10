package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
public class DocketResponse {
    private Integer type;
    private String code;
    private DocketReasonResponse reason;
    private WarehouseResponse warehouse;
    private DocketResponse.PurchaseOrderResponse purchaseOrder;
    private DocketResponse.OrderResponse order;
    private String note;
    private Integer status;
    private Set<DocketVariantResponse> docketVariants;

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class PurchaseOrderResponse extends BaseResponse {
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
