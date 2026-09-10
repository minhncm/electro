package com.ncm.electro.mapper.employee;

import com.ncm.electro.dto.employee.JobTitleRequest;
import com.ncm.electro.dto.employee.JobTitleResponse;
import com.ncm.electro.entity.employee.JobTitle;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface JobTitleMapper extends GenericMapper<JobTitle, JobTitleRequest, JobTitleResponse> {
}
