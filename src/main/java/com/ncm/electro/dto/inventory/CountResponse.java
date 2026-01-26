package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class CountResponse extends BaseResponse {
    private String code;
    private WarehouseResponse warehouse;
    @Nullable
    private String note;
    private Integer status;
    private Set<CountVariantResponse> countVariants;
}
