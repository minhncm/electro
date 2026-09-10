package com.ncm.electro.dto.customer;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.authentication.UserResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class CustomerResponse extends BaseResponse {
    private UserResponse user;
    private CustomerGroupResponse customerGroup;
    private CustomerStatusResponse customerStatus;
    private CustomerResourceResponse customerResource;
}
