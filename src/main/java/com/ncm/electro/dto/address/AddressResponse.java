package com.ncm.electro.dto.address;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper = true)
public class AddressResponse extends BaseResponse {
    private String line;
    private ProvinceResponse province;
    private AddressResponse.DistrictResponse district;
    private AddressResponse.WardResponse ward;

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class DistrictResponse extends BaseResponse{
        private String name;
        private String code;
    }

    @Data
    @EqualsAndHashCode(callSuper = true)
    public static class WardResponse extends BaseResponse{
        private String name;
        private String code;
    }
}
