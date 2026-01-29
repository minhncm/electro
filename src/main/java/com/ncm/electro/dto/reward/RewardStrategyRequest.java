package com.ncm.electro.dto.reward;

import jakarta.annotation.Nullable;
import lombok.Data;

@Data
public class RewardStrategyRequest {
    @Nullable
    private String formula;
    @Nullable
    private Integer status;
}
