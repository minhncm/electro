package com.ncm.electro.repository.product;

import com.ncm.electro.entity.product.Property;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PropertyRepository extends JpaRepository<Property, Long> {
}