package com.ncm.electro.repository.product;

import com.ncm.electro.entity.product.Supplier;
import org.jspecify.annotations.NullMarked;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

@NullMarked
public interface SupplierRepository extends JpaRepository<Supplier, Long>, JpaSpecificationExecutor<Supplier> {
    @EntityGraph(attributePaths = {"address", "address.province", "address.district", "address.ward"})
    Page<Supplier> findAll(Specification<Supplier> specification, Pageable pageable);
}