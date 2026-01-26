package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.DestinationRequest;
import com.ncm.electro.dto.inventory.DestinationResponse;
import com.ncm.electro.entity.inventory.Destination;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface DestinationMapper extends GenericMapper<Destination, DestinationRequest, DestinationResponse> {
}
