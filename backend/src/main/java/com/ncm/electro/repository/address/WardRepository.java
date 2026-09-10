package com.ncm.electro.repository.address;

import com.ncm.electro.entity.address.Ward;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;


public interface WardRepository extends JpaRepository<Ward, Long>, JpaSpecificationExecutor<Ward> {
    @Override
    @EntityGraph(attributePaths = "district.province")
    Page<Ward> findAll(Specification<Ward> specification, Pageable pageable);

    List<Ward> findAllByDistrictId(Long districtId);
}