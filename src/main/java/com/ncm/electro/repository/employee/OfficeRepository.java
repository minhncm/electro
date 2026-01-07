package com.ncm.electro.repository.employee;

import com.ncm.electro.entity.employee.Office;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface OfficeRepository extends JpaRepository<Office, Long>, JpaSpecificationExecutor<Office> {
}