package com.ncm.electro.dto.ghn;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class GhnShippingFeeRequest {
    @JsonProperty("service_type_id")
    private Integer serviceTypeId;
    @JsonProperty("to_ward_code")
    private String toWardCode;
    @JsonProperty("to_district_id")
    private Integer toDistrictId;
    @JsonProperty("weight")
    private Integer weight;
}
