package com.ncm.electro.repository.order;

import com.ncm.electro.entity.order.OrderResource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderResourceRepository extends JpaRepository<OrderResource, Long> {
}