package com.ncm.electro.mapper.customer;

import com.ncm.electro.dto.customer.CustomerRequest;
import com.ncm.electro.dto.customer.CustomerResponse;
import com.ncm.electro.entity.customer.Customer;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CustomerMapper extends GenericMapper<Customer, CustomerRequest, CustomerResponse> {
}
