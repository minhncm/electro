package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Long> {
}