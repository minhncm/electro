package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.ProductInventoryLimitRequest;
import com.ncm.electro.dto.inventory.ProductInventoryLimitResponse;
import com.ncm.electro.entity.inventory.ProductInventoryLimit;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProductInventoryLimitMapper extends GenericMapper<ProductInventoryLimit, ProductInventoryLimitRequest, ProductInventoryLimitResponse> {
}
