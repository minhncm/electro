package com.ncm.electro.repository.address;

import com.ncm.electro.entity.address.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ProvinceRepository extends JpaRepository<Province, Long>, JpaSpecificationExecutor<Province> {
    List<Province> findAllByGhnProvinceIdIsNotNull();

}