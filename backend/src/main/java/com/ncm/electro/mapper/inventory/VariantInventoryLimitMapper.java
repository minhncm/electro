package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.VariantInventoryLimitRequest;
import com.ncm.electro.dto.inventory.VariantInventoryLimitResponse;
import com.ncm.electro.entity.inventory.VariantInventoryLimit;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface VariantInventoryLimitMapper extends GenericMapper<VariantInventoryLimit, VariantInventoryLimitRequest, VariantInventoryLimitResponse> {
}
