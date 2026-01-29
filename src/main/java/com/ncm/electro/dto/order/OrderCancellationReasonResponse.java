package com.ncm.electro.dto.order;

import com.ncm.electro.dto.BaseResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class OrderCancellationReasonResponse extends BaseResponse {
    private String name;
    @Nullable
    private String note;
    private Integer status;
}
