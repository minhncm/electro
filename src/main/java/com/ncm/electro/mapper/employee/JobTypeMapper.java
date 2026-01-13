package com.ncm.electro.mapper.employee;

import com.ncm.electro.dto.employee.JobTypeRequest;
import com.ncm.electro.dto.employee.JobTypeResponse;
import com.ncm.electro.entity.employee.JobType;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface JobTypeMapper extends GenericMapper<JobType, JobTypeRequest, JobTypeResponse> {
}
