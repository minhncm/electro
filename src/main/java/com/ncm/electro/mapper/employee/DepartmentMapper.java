package com.ncm.electro.mapper.employee;

import com.ncm.electro.dto.employee.DepartmentRequest;
import com.ncm.electro.dto.employee.DepartmentResponse;
import com.ncm.electro.entity.employee.Department;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface DepartmentMapper extends GenericMapper<Department, DepartmentRequest, DepartmentResponse> {
}
