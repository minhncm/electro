package com.ncm.electro.dto.employee;

import com.ncm.electro.dto.authentication.UserRequest;
import com.ncm.electro.entity.authentication.User;
import lombok.Data;

@Data
public class EmployeeRequest {
    private UserRequest user;
    private Long officeId;
    private Long departmentId;
    private Long jobTypeId;
    private Long jobLevelId;
    private Long jobTitleId;
}
