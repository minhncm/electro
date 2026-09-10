package com.ncm.electro.dto.ghn;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;

import java.time.Instant;

@Data
public class GhnCreateOrderResponse {
    private Integer code;
    private String message;
    private Data$ data;

    @Data
    public static class Data$ {
        @JsonAlias("district_encode")
        private String districtEncode;
        @JsonAlias("expected_delivery_time")
        private Instant expectedDeliveryTime;
        private Fee fee;
        @JsonAlias("order_code")
        private String orderCode;
        @JsonAlias("sort_code")
        private String sortCode;
        @JsonAlias("total_fee")
        private Integer totalFee;
        @JsonAlias("trans_type")
        private String transType;
        @JsonAlias("ward_encode")
        private String wardEncode;

        @Data
        public static class Fee {
            private Integer coupon;
            private Integer insurance;
            @JsonAlias("main_service")
            private Integer mainService;
            private Integer r2s;
            @JsonAlias("return")
            private Integer return$;
            @JsonAlias("station_do")
            private Integer stationDo;
            @JsonAlias("station_pu")
            private Integer stationPu;
        }
    }

}
