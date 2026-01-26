package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class DocketReasonResponse extends BaseResponse {
    private String name;
    private Integer status;
}
