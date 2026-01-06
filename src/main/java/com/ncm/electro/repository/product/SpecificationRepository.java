package com.ncm.electro.repository.product;

import com.ncm.electro.entity.product.Specification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpecificationRepository extends JpaRepository<Specification, Long> {
}