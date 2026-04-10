package com.ncm.electro.entity.cart;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.Hibernate;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@Embeddable
@AllArgsConstructor
@NoArgsConstructor
public class CartVariantKey implements Serializable {
    @Column(name = "cart_id", nullable = false)
    private Long cartId;

    @Column(name = "variant_id", nullable = false)
    private Long variantId;

}