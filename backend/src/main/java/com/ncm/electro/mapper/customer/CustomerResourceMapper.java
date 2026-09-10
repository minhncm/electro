package com.ncm.electro.mapper.customer;

import com.ncm.electro.dto.customer.CustomerResourceRequest;
import com.ncm.electro.dto.customer.CustomerResourceResponse;
import com.ncm.electro.entity.customer.CustomerResource;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CustomerResourceMapper extends GenericMapper<CustomerResource, CustomerResourceRequest, CustomerResourceResponse> {
}
