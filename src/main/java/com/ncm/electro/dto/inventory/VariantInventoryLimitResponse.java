package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class VariantInventoryLimitResponse extends BaseResponse {
    private Long id;
    @Nullable
    private Integer minimumLimit;
    @Nullable
    private Integer maximumLimit;
}
