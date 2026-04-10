package com.ncm.electro.repository.employee;

import com.ncm.electro.entity.employee.Office;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface OfficeRepository extends JpaRepository<Office, Long>, JpaSpecificationExecutor<Office> {
    @Override
    @EntityGraph(attributePaths = {"address", "address.province", "address.district", "address.ward"})
    Page<Office> findAll(Specification<Office> specification, Pageable pageable);
}