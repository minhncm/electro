package com.ncm.electro.mapper.authentication;

import com.ncm.electro.dto.authentication.UserRequest;
import com.ncm.electro.dto.authentication.UserResponse;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper extends GenericMapper<User, UserRequest, UserResponse> {
}
