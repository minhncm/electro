package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.address.AddressRequest;
import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class DestinationRequest {
    @Nullable
    private String contactFullname;
    @Nullable
    private String contactEmail;
    @Nullable
    private String contactPhone;
    private AddressRequest address;
    private Integer status;
}
