package com.ncm.electro.repository.employee;

import com.ncm.electro.entity.employee.JobTitle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobTitleRepository extends JpaRepository<JobTitle, Long> {
}