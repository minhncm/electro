package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.address.AddressRequest;
import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class WarehouseRequest {
    private String code;
    private String name;
    @Nullable
    private AddressRequest address;
    private Integer status;
}
