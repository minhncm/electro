package com.ncm.electro.dto.employee;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class JobTypeResponse extends BaseResponse {
    private String name;
    private Integer status;
}
