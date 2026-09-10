package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.DestinationRequest;
import com.ncm.electro.dto.inventory.DestinationResponse;
import com.ncm.electro.entity.inventory.Destination;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.mapper.address.AddressMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = AddressMapper.class)
public interface DestinationMapper extends GenericMapper<Destination, DestinationRequest, DestinationResponse> {
}
