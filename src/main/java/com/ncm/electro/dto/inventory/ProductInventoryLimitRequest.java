package com.ncm.electro.dto.inventory;

import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class ProductInventoryLimitRequest {
    private Long productId;
    @Nullable
    private Integer minimumLimit;
    @Nullable
    private Integer maximumLimit;
}
