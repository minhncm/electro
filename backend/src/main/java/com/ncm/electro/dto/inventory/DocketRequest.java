package com.ncm.electro.dto.inventory;

import lombok.Data;

import java.util.Set;

@Data
public class DocketRequest {
    private Integer type;
    private String code;
    private Long reasonId;
    private Long warehouseId;
    private Long purchaseOrderId;
    private Long orderId;
    private String note;
    private Integer status;
    private Set<DocketVariantRequest> docketVariants;
}
