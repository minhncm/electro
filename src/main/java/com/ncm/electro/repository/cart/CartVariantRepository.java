package com.ncm.electro.repository.cart;

import com.ncm.electro.entity.cart.CartVariant;
import com.ncm.electro.entity.cart.CartVariantKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartVariantRepository extends JpaRepository<CartVariant, CartVariantKey> {
}