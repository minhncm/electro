package com.ncm.electro.dto.client;

import com.ncm.electro.dto.address.AddressRequest;
import lombok.Data;

@Data
public class ClientPersonalSettingRequest {
    private String username;
    private String fullname;
    private String gender;
    private AddressRequest address;
}
