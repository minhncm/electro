package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.SupplierRequest;
import com.ncm.electro.dto.product.SupplierResponse;
import com.ncm.electro.entity.product.Supplier;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.mapper.address.AddressMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = AddressMapper.class)
public interface SupplierMapper extends GenericMapper<Supplier, SupplierRequest, SupplierResponse> {
}
