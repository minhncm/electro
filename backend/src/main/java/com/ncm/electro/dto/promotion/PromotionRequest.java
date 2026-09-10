package com.ncm.electro.dto.promotion;

import lombok.Data;

import java.time.Instant;
import java.util.Set;

@Data
public class PromotionRequest {
    private String name;
    private Instant startDate;
    private Instant endDate;
    private Integer percent;
    private Integer status;
    private Set<Long> productIds;
    private Set<Long> categoryIds;
}
