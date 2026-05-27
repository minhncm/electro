package com.ncm.electro.dto.ghn;

import com.fasterxml.jackson.annotation.JsonAlias;
import com.ncm.electro.entity.waybill.RequiredNote;
import lombok.Data;

import java.util.List;

@Data
public class GhnCreateOrderRequest {
    @JsonAlias("payment_type_id")
    private Integer paymentTypeId;
    private String note;
    @JsonAlias("required_note")
    private RequiredNote requiredNote;
//    @JsonAlias("from_name")
//    private String fromName;
//    @JsonAlias("from_phone")
//    private String fromPhone;
//    @JsonAlias("from_address")
//    private String fromAddress;
//    @JsonAlias("from_ward_name")
//    private String fromWardName;
//    @JsonAlias("from_district_name")
//    private String fromDistrictName;
//    @JsonAlias("from_province_name")
//    private String fromProvinceName;
    @JsonAlias("to_name")
    private String toName;
    @JsonAlias("to_phone")
    private String toPhone;
    @JsonAlias("to_address")
    private String toAddress;
    @JsonAlias("to_ward_name")
    private String toWardName;
    @JsonAlias("to_district_name")
    private String toDistrictName;
    @JsonAlias("to_province_name")
    private String toProvinceName;
    @JsonAlias("cod_amount")
    private Integer codAmount;
    private Integer weight;
    private Integer length;
    private Integer width;
    private Integer height;
    @JsonAlias("service_type_id")
    private Integer serviceTypeId;
    private List<Item> items;
    @Data
    public static class Item {
        private String name;
        private Integer quantity;
        private Integer price;
    }
}
