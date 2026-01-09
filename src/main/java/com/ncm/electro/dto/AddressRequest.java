package com.ncm.electro.dto;

import lombok.Data;

@Data
public class AddressRequest {
    private String line;
    private Long provinceId;
    private Long districtId;
    private Long wardId;
}
