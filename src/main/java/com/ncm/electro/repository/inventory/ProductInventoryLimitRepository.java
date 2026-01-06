package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.ProductInventoryLimit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductInventoryLimitRepository extends JpaRepository<ProductInventoryLimit, Long> {
}