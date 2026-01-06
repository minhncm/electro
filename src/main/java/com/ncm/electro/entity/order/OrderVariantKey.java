package com.ncm.electro.entity.order;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Embeddable
public class OrderVariantKey implements Serializable {
    @Column(name = "order_id", nullable = false)
    private Long orderId;

    @Column(name = "variant_id", nullable = false)
    private Long variantId;

}