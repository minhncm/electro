package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.StorageLocationRequest;
import com.ncm.electro.dto.inventory.StorageLocationResponse;
import com.ncm.electro.entity.inventory.StorageLocation;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface StorageLocationMapper extends GenericMapper<StorageLocation, StorageLocationRequest, StorageLocationResponse> {
}
