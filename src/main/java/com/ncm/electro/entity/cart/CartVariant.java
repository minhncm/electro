package com.ncm.electro.entity.cart;

import com.ncm.electro.entity.product.Variant;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "cart_variant")
public class CartVariant {
    @EmbeddedId
    private CartVariantKey cartVariantKey;

    @MapsId("cartId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "cart_id", nullable = false)
    private Cart cart;

    @MapsId("variantId")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "variant_id", nullable = false)
    private Variant variant;

    @Column(name = "created_at", nullable = false)
    private Instant createdAt;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

}