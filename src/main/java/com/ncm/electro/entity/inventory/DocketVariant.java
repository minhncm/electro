package com.ncm.electro.entity.inventory;

import com.ncm.electro.entity.product.Variant;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "docket_variant")
public class DocketVariant {
    @EmbeddedId
    private DocketVariantKey docketVariantKey;

    @MapsId("docketId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "docket_id", nullable = false)
    private Docket docket;

    @MapsId("variantId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "variant_id", nullable = false)
    private Variant variant;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

}