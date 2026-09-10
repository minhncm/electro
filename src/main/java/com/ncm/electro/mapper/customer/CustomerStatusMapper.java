package com.ncm.electro.mapper.customer;

import com.ncm.electro.dto.customer.CustomerStatusRequest;
import com.ncm.electro.dto.customer.CustomerStatusResponse;
import com.ncm.electro.entity.customer.CustomerStatus;
import com.ncm.electro.mapper.GenericMapper;
import lombok.Data;
import lombok.EqualsAndHashCode;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CustomerStatusMapper extends GenericMapper<CustomerStatus, CustomerStatusRequest, CustomerStatusResponse> {
}
