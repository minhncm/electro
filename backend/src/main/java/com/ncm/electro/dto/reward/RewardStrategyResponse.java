package com.ncm.electro.dto.reward;

import com.ncm.electro.dto.BaseResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class RewardStrategyResponse extends BaseResponse {
    private String name;
    private String code;
    private String formula;
    private Integer status;
}
