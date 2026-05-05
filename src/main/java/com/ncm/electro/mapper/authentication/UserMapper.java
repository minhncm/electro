package com.ncm.electro.mapper.authentication;

import com.ncm.electro.dto.authentication.UserRequest;
import com.ncm.electro.dto.authentication.UserResponse;
import com.ncm.electro.dto.client.ClientEmailSettingUserRequest;
import com.ncm.electro.dto.client.ClientPersonalSettingUserRequest;
import com.ncm.electro.dto.client.ClientPhoneSettingUserRequest;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.mapper.address.AddressMapper;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = { MapperUtils.class, AddressMapper.class})
public interface UserMapper extends GenericMapper<User, UserRequest, UserResponse> {
    @Override
    @Mapping(source = "roleIds", target = "roles")
    User requestToEntity(UserRequest request);

    @Override
    @Mapping(source = "roleIds", target = "roles")
    User partialUpdate(@MappingTarget User entity, UserRequest request);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    User partialUpdate(@MappingTarget User entity, ClientPersonalSettingUserRequest request);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    User partialUpdate(@MappingTarget User entity, ClientPhoneSettingUserRequest request);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    User partialUpdate(@MappingTarget User entity, ClientEmailSettingUserRequest request);
}
