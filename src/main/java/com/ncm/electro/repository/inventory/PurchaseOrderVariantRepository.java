package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.PurchaseOrderVariant;
import com.ncm.electro.entity.inventory.PurchaseOrderVariantKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseOrderVariantRepository extends JpaRepository<PurchaseOrderVariant, PurchaseOrderVariantKey> {
}