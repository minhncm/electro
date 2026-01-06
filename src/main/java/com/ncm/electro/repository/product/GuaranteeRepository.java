package com.ncm.electro.repository.product;

import com.ncm.electro.entity.product.Guarantee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GuaranteeRepository extends JpaRepository<Guarantee, Long> {
}