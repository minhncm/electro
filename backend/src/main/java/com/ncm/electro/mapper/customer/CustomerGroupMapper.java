package com.ncm.electro.mapper.customer;

import com.ncm.electro.dto.customer.CustomerGroupRequest;
import com.ncm.electro.dto.customer.CustomerGroupResponse;
import com.ncm.electro.entity.customer.CustomerGroup;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CustomerGroupMapper extends GenericMapper<CustomerGroup, CustomerGroupRequest, CustomerGroupResponse> {
}
