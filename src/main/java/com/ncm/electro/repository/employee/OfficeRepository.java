package com.ncm.electro.repository.employee;

import com.ncm.electro.entity.employee.Office;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OfficeRepository extends JpaRepository<Office, Long> {
}