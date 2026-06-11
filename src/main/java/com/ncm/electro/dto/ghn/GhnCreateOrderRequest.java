package com.ncm.electro.dto.ghn;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ncm.electro.entity.waybill.RequiredNote;
import lombok.Data;

import java.util.List;

@Data
public class GhnCreateOrderRequest {
    @JsonProperty("payment_type_id")
    private Integer paymentTypeId;
    private String note;
    @JsonProperty("required_note")
    private RequiredNote requiredNote;
    @JsonProperty("to_name")
    private String toName;
    @JsonProperty("to_phone")
    private String toPhone;
    @JsonProperty("to_address")
    private String toAddress;
    @JsonProperty("to_ward_name")
    private String toWardName;
    @JsonProperty("to_district_name")
    private String toDistrictName;
    @JsonProperty("to_province_name")
    private String toProvinceName;
    @JsonProperty("cod_amount")
    private Integer codAmount;
    private Integer weight;
    private Integer length;
    private Integer width;
    private Integer height;
    @JsonProperty("service_type_id")
    private Integer serviceTypeId;
    private List<Item> items;
    @Data
    public static class Item {
        private String name;
        private Integer quantity;
        private Integer price;
    }
}
