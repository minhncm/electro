package com.ncm.electro.dto.promotion;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.product.ProductResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.Instant;
import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class PromotionResponse extends BaseResponse {
    private String name;
    private Instant startDate;
    private Instant endDate;
    private Integer percent;
    private Integer status;
    private Set<ProductResponse> products;
}
