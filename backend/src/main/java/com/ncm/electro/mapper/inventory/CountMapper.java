package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.CountRequest;
import com.ncm.electro.dto.inventory.CountResponse;
import com.ncm.electro.entity.inventory.Count;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface CountMapper extends GenericMapper<Count, CountRequest, CountResponse> {
}
