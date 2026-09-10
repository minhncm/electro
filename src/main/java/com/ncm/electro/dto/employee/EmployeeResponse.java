package com.ncm.electro.dto.employee;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.authentication.UserResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class EmployeeResponse extends BaseResponse {
    private UserResponse user;
    private OfficeResponse office;
    private DepartmentResponse department;
    private JobTypeResponse jobType;
    private JobLevelResponse jobLevel;
    private JobTitleResponse jobTitle;
}
