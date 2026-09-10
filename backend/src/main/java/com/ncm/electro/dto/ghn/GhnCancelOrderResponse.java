package com.ncm.electro.dto.ghn;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class GhnCancelOrderResponse {
    @JsonProperty("code")
    private String code;
    @JsonProperty("message")
    private String message;
    @JsonProperty("data")
    private $Data data;

    @Data
    public static class $Data {
        @JsonProperty("order_code")
        private String orderCode;
        @JsonProperty("result")
        private boolean result;
        @JsonProperty("message")
        private String message;
    }
}
