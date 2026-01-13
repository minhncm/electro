package com.ncm.electro.mapper.address;

import com.ncm.electro.dto.address.AddressRequest;
import com.ncm.electro.dto.address.AddressResponse;
import com.ncm.electro.entity.address.Address;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AddressMapper extends GenericMapper<Address, AddressRequest, AddressResponse> {
}
