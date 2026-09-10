package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.ProductInventoryResponse;
import com.ncm.electro.mapper.product.BrandMapper;
import com.ncm.electro.mapper.product.SupplierMapper;
import com.ncm.electro.projection.inventory.ProductInventory;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = {DocketVariantMapper.class, BrandMapper.class, SupplierMapper.class})
public interface ProductInventoryMapper {
    ProductInventoryResponse toResponse(ProductInventory productInventory);
    List<ProductInventoryResponse> toResponse(List<ProductInventory> productInventories);
}
