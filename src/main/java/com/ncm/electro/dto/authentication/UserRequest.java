package com.ncm.electro.dto.authentication;

import com.ncm.electro.dto.address.AddressRequest;
import com.ncm.electro.dto.address.AddressResponse;
import lombok.Data;

import java.util.Set;

@Data
public class UserRequest {
    private String username;
    private String password;
    private String fullname;
    private String email;
    private String phone;
    private String gender;
    private AddressRequest address;
    private String avatar;
    private Integer status;
    private Set<Long> roleIds;
}
