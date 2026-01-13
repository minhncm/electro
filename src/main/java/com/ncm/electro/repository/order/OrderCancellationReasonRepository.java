package com.ncm.electro.repository.order;

import com.ncm.electro.entity.order.OrderCancellationReason;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderCancellationReasonRepository extends JpaRepository<OrderCancellationReason, Long> {
}