package com.ncm.electro.mapper.employee;

import com.ncm.electro.dto.employee.JobLevelRequest;
import com.ncm.electro.dto.employee.JobLevelResponse;
import com.ncm.electro.entity.employee.JobLevel;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface JobLevelMapper extends GenericMapper<JobLevel, JobLevelRequest, JobLevelResponse> {
}
