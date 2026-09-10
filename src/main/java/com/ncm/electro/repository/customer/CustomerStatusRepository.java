package com.ncm.electro.repository.customer;

import com.ncm.electro.entity.customer.CustomerStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface CustomerStatusRepository extends JpaRepository<CustomerStatus, Long>, JpaSpecificationExecutor<CustomerStatus> {
}