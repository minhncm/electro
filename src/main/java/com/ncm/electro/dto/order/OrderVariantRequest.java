package com.ncm.electro.dto.order;

import com.ncm.electro.entity.order.Order;
import com.ncm.electro.entity.product.Variant;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class OrderVariantRequest {
    private Long variantId;
    private BigDecimal price;
    private Integer quantity;
    private BigDecimal amount;
}
