package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.BrandRequest;
import com.ncm.electro.dto.product.BrandResponse;
import com.ncm.electro.entity.product.Brand;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BrandMapper extends GenericMapper<Brand, BrandRequest, BrandResponse> {
}
