package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.VariantRequest;
import com.ncm.electro.dto.product.VariantResponse;
import com.ncm.electro.entity.product.Variant;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface VariantMapper extends GenericMapper<Variant, VariantRequest, VariantResponse> {
}
