package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.SpecificationRequest;
import com.ncm.electro.dto.product.SpecificationResponse;
import com.ncm.electro.entity.product.Specification;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface SpecificationMapper extends GenericMapper<Specification, SpecificationRequest, SpecificationResponse> {
}
