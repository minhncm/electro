package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.CountVariant;
import com.ncm.electro.entity.inventory.CountVariantKey;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountVariantRepository extends JpaRepository<CountVariant, CountVariantKey> {
}