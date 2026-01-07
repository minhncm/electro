package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.DocketVariant;
import com.ncm.electro.entity.inventory.DocketVariantKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface DocketVariantRepository extends JpaRepository<DocketVariant, DocketVariantKey>, JpaSpecificationExecutor<DocketVariant> {
}