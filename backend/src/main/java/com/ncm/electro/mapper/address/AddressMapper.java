package com.ncm.electro.mapper.address;

import com.ncm.electro.dto.address.AddressRequest;
import com.ncm.electro.dto.address.AddressResponse;
import com.ncm.electro.entity.address.Address;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = MapperUtils.class)
public interface AddressMapper extends GenericMapper<Address, AddressRequest, AddressResponse> {

    @Override
    @Mapping(source = "provinceId", target = "province")
    @Mapping(source = "districtId", target = "district")
    @Mapping(source = "wardId", target = "ward")
    Address requestToEntity(AddressRequest request);

    @Override
    @Mapping(source = "provinceId", target = "province")
    @Mapping(source = "districtId", target = "district")
    @Mapping(source = "wardId", target = "ward")
    Address partialUpdate(@MappingTarget Address entity, AddressRequest request);
}
