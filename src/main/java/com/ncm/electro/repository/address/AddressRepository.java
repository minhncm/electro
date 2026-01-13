package com.ncm.electro.repository.address;

import com.ncm.electro.entity.address.Address;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

@NullMarked
public interface AddressRepository extends JpaRepository<Address, Long>, JpaSpecificationExecutor<Address> {
    @EntityGraph(attributePaths = {"province", "district", "ward"})
    Page<Address> findAll(Specification<Address> specification, Pageable pageable);
}