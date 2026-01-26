package com.ncm.electro.dto.inventory;

import jakarta.annotation.Nullable;
import lombok.Data;

import java.util.Set;

@Data
public class CountRequest {
    private String code;
    private Long warehouseId;
    @Nullable
    private String note;
    private Integer status;
    private Set<CountVariantRequest> countVariants;
}
