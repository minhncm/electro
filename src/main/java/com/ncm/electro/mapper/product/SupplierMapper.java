package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.SupplierRequest;
import com.ncm.electro.dto.product.SupplierResponse;
import com.ncm.electro.entity.product.Supplier;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface SupplierMapper extends GenericMapper<Supplier, SupplierRequest, SupplierResponse> {
}
