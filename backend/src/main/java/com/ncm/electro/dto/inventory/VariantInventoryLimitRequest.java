package com.ncm.electro.dto.inventory;

import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class VariantInventoryLimitRequest {
    private Long variantId;
    @Nullable
    private Integer minimumLimit;
    @Nullable
    private Integer maximumLimit;
}
