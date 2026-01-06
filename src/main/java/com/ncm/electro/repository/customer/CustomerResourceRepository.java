package com.ncm.electro.repository.customer;

import com.ncm.electro.entity.customer.CustomerResource;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerResourceRepository extends JpaRepository<CustomerResource, Long> {
}