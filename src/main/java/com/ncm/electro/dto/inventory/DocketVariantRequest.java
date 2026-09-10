package com.ncm.electro.dto.inventory;

import lombok.Data;

@Data
public class DocketVariantRequest {
    private Long variantId;
    private Integer quantity;
}
