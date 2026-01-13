package com.ncm.electro.mapper.employee;

import com.ncm.electro.dto.employee.EmployeeRequest;
import com.ncm.electro.dto.employee.EmployeeResponse;
import com.ncm.electro.entity.employee.Employee;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EmployeeMapper extends GenericMapper<Employee, EmployeeRequest, EmployeeResponse> {
}
