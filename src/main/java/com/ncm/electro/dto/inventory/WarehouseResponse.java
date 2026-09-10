package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.address.AddressResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class WarehouseResponse extends BaseResponse {
    private String code;
    private String name;
    @Nullable
    private AddressResponse address;
    private Integer status;
}
