package com.ncm.electro.repository.employee;

import com.ncm.electro.entity.employee.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface EmployeeRepository extends JpaRepository<Employee, Long>, JpaSpecificationExecutor<Employee> {

    @Override
    @EntityGraph(attributePaths = {
            "user", "user.address", "user.roles", "office", "office.address",
            "department", "jobType", "jobLevel", "jobTitle"})
    Page<Employee> findAll(Specification<Employee> specification, Pageable pageable);
}