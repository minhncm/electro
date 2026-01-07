package com.ncm.electro.repository.product;

import com.ncm.electro.entity.product.Variant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface VariantRepository extends JpaRepository<Variant, Long>, JpaSpecificationExecutor<Variant> {
}