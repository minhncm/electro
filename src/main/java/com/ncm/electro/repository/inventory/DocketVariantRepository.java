package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.DocketVariant;
import com.ncm.electro.entity.inventory.DocketVariantKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocketVariantRepository extends JpaRepository<DocketVariant, DocketVariantKey> {
}