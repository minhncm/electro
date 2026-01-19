package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.CategoryRequest;
import com.ncm.electro.dto.product.CategoryResponse;
import com.ncm.electro.entity.product.Category;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CategoryMapper extends GenericMapper<Category, CategoryRequest, CategoryResponse> {
}
