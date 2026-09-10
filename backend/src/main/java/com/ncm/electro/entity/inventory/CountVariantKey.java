package com.ncm.electro.entity.inventory;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Embeddable
public class CountVariantKey implements Serializable {
    @Column(name = "count_id", nullable = false)
    private Long countId;

    @Column(name = "variant_id", nullable = false)
    private Long variantId;

}