package com.ncm.electro.repository.cashbook;

import com.ncm.electro.entity.cashbook.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long>, JpaSpecificationExecutor<PaymentMethod> {
}