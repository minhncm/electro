package com.ncm.electro.dto.address;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class DistrictResponse extends BaseResponse {
    private String name;
    private String code;
    private ProvinceResponse province;
}
