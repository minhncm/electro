package com.ncm.electro.repository.cart;

import com.ncm.electro.entity.cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}