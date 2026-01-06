package com.ncm.electro.repository.cashbook;

import com.ncm.electro.entity.cashbook.PaymentMethod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentMethodRepository extends JpaRepository<PaymentMethod, Long> {
}