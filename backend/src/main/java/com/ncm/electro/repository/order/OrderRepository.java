package com.ncm.electro.repository.order;

import com.ncm.electro.entity.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long>, JpaSpecificationExecutor<Order> {
    Optional<Order> findByCode(@Param("code") String code);
    Optional<Order> findByPaypalOrderId(String paypalOrderId);
    @Query("SELECT CASE WHEN COUNT(o) > 0 THEN TRUE ELSE FALSE END " +
            "FROM Order o " +
            "JOIN o.orderVariants ov " +
            "JOIN ov.variant v " +
            "WHERE v.product.id = :productId " +
            "AND o.status = 4 " +
            "AND o.paymentStatus = 'PAID'")
    boolean existsDeliveredAndPaidByProductId(Long productId);
}