package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.ProductRequest;
import com.ncm.electro.dto.product.ProductResponse;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProductMapper extends GenericMapper<Product, ProductRequest, ProductResponse> {
}
