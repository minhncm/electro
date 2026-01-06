package com.ncm.electro.repository.customer;

import com.ncm.electro.entity.customer.CustomerGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerGroupRepository extends JpaRepository<CustomerGroup, Long> {
}