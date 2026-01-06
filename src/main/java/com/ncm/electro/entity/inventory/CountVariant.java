package com.ncm.electro.entity.inventory;

import com.ncm.electro.entity.product.Variant;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "count_variant")
public class CountVariant {
    @EmbeddedId
    private CountVariantKey countVariantKey;

    @MapsId("countId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "count_id", nullable = false)
    private Count count;

    @MapsId("variantId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "variant_id", nullable = false)
    private Variant variant;

    @Column(name = "inventory", nullable = false)
    private Integer inventory;

    @Column(name = "actual_inventory", nullable = false)
    private Integer actualInventory;

}