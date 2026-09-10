package com.ncm.electro.mapper.customer;

import com.ncm.electro.dto.customer.CustomerRequest;
import com.ncm.electro.dto.customer.CustomerResponse;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.entity.customer.Customer;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.mapper.address.AddressMapper;
import com.ncm.electro.mapper.authentication.UserMapper;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = {MapperUtils.class, UserMapper.class})
public interface CustomerMapper extends GenericMapper<Customer, CustomerRequest, CustomerResponse> {

    @Override
    @Mapping(source = "customerGroupId", target = "customerGroup")
    @Mapping(source = "customerResourceId", target = "customerResource")
    @Mapping(source = "customerStatusId", target = "customerStatus")
    Customer requestToEntity(CustomerRequest request);

    @Override
    @Mapping(source = "customerGroupId", target = "customerGroup")
    @Mapping(source = "customerResourceId", target = "customerResource")
    @Mapping(source = "customerStatusId", target = "customerStatus")
    Customer partialUpdate(@MappingTarget Customer entity, CustomerRequest request);
}
