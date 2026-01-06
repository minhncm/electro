package com.ncm.electro.repository.employee;

import com.ncm.electro.entity.employee.JobType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobTypeRepository extends JpaRepository<JobType, Long> {
}