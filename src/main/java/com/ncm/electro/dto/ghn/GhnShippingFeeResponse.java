package com.ncm.electro.dto.ghn;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

@Data
public class GhnShippingFeeResponse {
    private Integer code;
    private String message;
    private Data$ data;
    @Data
    public static class Data${
        private Integer total;
        @JsonAlias("service_fee")
        private Integer serviceFee;
        @JsonAlias("insurance_fee")
        private Integer insuranceFee;
        @JsonAlias("pick_station_fee")
        private Integer pickStationFee;
        @JsonAlias("coupon_value")
        private Integer couponValue;
        @JsonAlias("r2s_fee")
        private Integer r2sFee;
        @JsonAlias("document_return")
        private Integer documentReturn;
        @JsonAlias("double_check")
        private Integer doubleCheck;
        @JsonAlias("cod_fee")
        private Integer codFee;
        @JsonAlias("pick_remote_areas_fee")
        private Integer pickRemoteAreasFee;
        @JsonAlias("deliver_remote_areas_fee")
        private Integer deliverRemoteAreasFee;
        @JsonAlias("cod_failed_fee")
        private Integer codFailedFee;
    }
}
