package com.ncm.electro.dto.address;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.Instant;

@Data
@EqualsAndHashCode(callSuper = true)
public class ProvinceResponse extends BaseResponse {
    private String name;
    private String code;
}
