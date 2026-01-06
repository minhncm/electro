package com.ncm.electro.repository.employee;

import com.ncm.electro.entity.employee.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
}