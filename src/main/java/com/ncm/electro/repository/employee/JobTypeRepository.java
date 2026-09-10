package com.ncm.electro.repository.employee;

import com.ncm.electro.entity.employee.JobType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface JobTypeRepository extends JpaRepository<JobType, Long>, JpaSpecificationExecutor<JobType> {
}