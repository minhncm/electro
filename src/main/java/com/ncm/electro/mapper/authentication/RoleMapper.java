package com.ncm.electro.mapper.authentication;

import com.ncm.electro.dto.authentication.RoleRequest;
import com.ncm.electro.dto.authentication.RoleResponse;
import com.ncm.electro.entity.authentication.Role;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RoleMapper extends GenericMapper<Role, RoleRequest, RoleResponse> {
}
