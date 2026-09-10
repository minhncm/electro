package com.ncm.electro.dto.order;

import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class OrderCancellationReasonRequest {
    private String name;
    @Nullable
    private String note;
    private Integer status;
}
