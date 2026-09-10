package com.ncm.electro.repository.address;

import com.ncm.electro.entity.address.District;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface DistrictRepository extends JpaRepository<District, Long>, JpaSpecificationExecutor<District> {
    @EntityGraph(attributePaths = "province")
    Page<District> findAll(Specification<District> specification, Pageable pageable);

    List<District> findAllByGhnDistrictIdIsNotNull();
    List<District> findAllByProvinceId(Long provinceId);
}