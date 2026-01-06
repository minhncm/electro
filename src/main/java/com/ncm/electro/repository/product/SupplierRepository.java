package com.ncm.electro.repository.product;

import com.ncm.electro.entity.product.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SupplierRepository extends JpaRepository<Supplier, Long> {
}