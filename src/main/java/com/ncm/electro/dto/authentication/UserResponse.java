package com.ncm.electro.dto.authentication;

import com.ncm.electro.dto.BaseResponse;
import com.ncm.electro.dto.address.AddressResponse;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Set;

@Data
@EqualsAndHashCode(callSuper = true)
public class UserResponse extends BaseResponse {
    private String username;
    private String fullname;
    private String email;
    private String phone;
    private String gender;
    private AddressResponse address;
    private String avatar;
    private Integer status;
    private Set<RoleResponse> roles;
}
