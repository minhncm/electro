package com.ncm.electro.dto.authentication;

import com.ncm.electro.dto.address.AddressResponse;
import lombok.Data;

import java.util.Set;

@Data
public class UserRequest {
    private String username;
    private String fullName;
    private String email;
    private String phone;
    private String gender;
    private AddressResponse address;
    private String avatar;
    private Integer Status;
    private Set<RoleUserRequest> roles;
}
