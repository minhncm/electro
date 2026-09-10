package com.ncm.electro.entity.cart;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class CartVariantKey implements Serializable {
    @Column(name = "cart_id", nullable = false)
    private Long cartId;

    @Column(name = "variant_id", nullable = false)
    private Long variantId;

}