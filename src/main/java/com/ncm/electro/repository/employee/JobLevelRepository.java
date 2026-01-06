package com.ncm.electro.repository.employee;

import com.ncm.electro.entity.employee.JobLevel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobLevelRepository extends JpaRepository<JobLevel, Long> {
}