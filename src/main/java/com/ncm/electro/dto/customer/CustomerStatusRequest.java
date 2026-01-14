package com.ncm.electro.dto.customer;

import lombok.Data;

@Data
public class CustomerStatusRequest {
    private String code;
    private String name;
    private String Description;
    private String color;
    private String status;
}
