package com.ncm.electro.dto.employee;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.address.AddressResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class OfficeResponse extends BaseResponse {
    private String name;
    private AddressResponse address;
    private Integer status;
}
