package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.PropertyRequest;
import com.ncm.electro.dto.product.PropertyResponse;
import com.ncm.electro.entity.product.Property;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PropertyMapper extends GenericMapper<Property, PropertyRequest, PropertyResponse> {
}
