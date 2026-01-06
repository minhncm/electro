package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.VariantInventoryLimit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VariantInventoryLimitRepository extends JpaRepository<VariantInventoryLimit, Long> {
}