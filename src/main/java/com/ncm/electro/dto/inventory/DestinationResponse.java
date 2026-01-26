package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.address.AddressResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class DestinationResponse extends BaseResponse {
    @Nullable
    private String contactFullname;
    @Nullable
    private String contactEmail;
    @Nullable
    private String contactPhone;
    private AddressResponse address;
    private Integer status;
}
