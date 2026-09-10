package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.product.VariantResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class StorageLocationResponse extends BaseResponse {
    private VariantResponse variant;
    private WarehouseResponse warehouse;
    private String name;
}
