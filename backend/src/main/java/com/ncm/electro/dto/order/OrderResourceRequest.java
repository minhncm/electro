package com.ncm.electro.dto.order;

import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class OrderResourceRequest {
    private String code;
    private String name;
    private String color;
    @Nullable
    private Long customerResourceId;
    private Integer status;
}
