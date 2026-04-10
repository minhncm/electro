package com.ncm.electro.repository.inventory;

import com.ncm.electro.entity.inventory.Warehouse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface WarehouseRepository extends JpaRepository<Warehouse, Long>, JpaSpecificationExecutor<Warehouse> {
    @EntityGraph(attributePaths = {"address", "address.province", "address.district"})
    Page<Warehouse> findAll(Specification<Warehouse> specification, Pageable pageable);
}