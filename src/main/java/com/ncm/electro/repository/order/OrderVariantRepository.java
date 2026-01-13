package com.ncm.electro.repository.order;

import com.ncm.electro.entity.order.OrderVariant;
import com.ncm.electro.entity.order.OrderVariantKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderVariantRepository extends JpaRepository<OrderVariant, OrderVariantKey> {
}