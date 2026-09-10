package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.WarehouseRequest;
import com.ncm.electro.dto.inventory.WarehouseResponse;
import com.ncm.electro.entity.inventory.Warehouse;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.mapper.address.AddressMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = AddressMapper.class)
public interface WarehouseMapper extends GenericMapper<Warehouse, WarehouseRequest, WarehouseResponse> {
}
