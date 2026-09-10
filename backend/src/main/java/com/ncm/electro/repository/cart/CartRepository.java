package com.ncm.electro.repository.cart;

import com.ncm.electro.entity.cart.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long>, JpaSpecificationExecutor<Cart> {
    @Query("SELECT c FROM Cart c " +
            "JOIN c.user u " +
            "JOIN FETCH c.cartVariants cv " +
            "JOIN FETCH cv.variant v " +
            "JOIN FETCH v.docketVariants " +
            "JOIN FETCH v.product p " +
            "LEFT JOIN FETCH p.promotions pr " +
            "WHERE u.username = :username AND c.status = 1")
    Optional<Cart> findByUsername(String username);

    Optional<Cart> findByUserId(Long userId);
}