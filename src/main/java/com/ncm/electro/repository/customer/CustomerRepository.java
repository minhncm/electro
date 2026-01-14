package com.ncm.electro.repository.customer;

import com.ncm.electro.entity.customer.Customer;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

@NullMarked
public interface CustomerRepository extends JpaRepository<Customer, Long>, JpaSpecificationExecutor<Customer> {
    @EntityGraph(attributePaths = {"user", "user.address", "user.roles", "customerGroup", "customerStatus", "customerResource"})
    Page<Customer> findAll(Specification<Customer> specification, Pageable pageable);
}