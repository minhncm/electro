package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.VariantInventoryLimit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface VariantInventoryLimitRepository extends JpaRepository<VariantInventoryLimit, Long>, JpaSpecificationExecutor<VariantInventoryLimit> {
}