package com.ncm.electro.mapper.address;

import com.ncm.electro.dto.address.WardRequest;
import com.ncm.electro.dto.address.WardResponse;
import com.ncm.electro.entity.address.Ward;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface WardMapper extends GenericMapper<Ward, WardRequest, WardResponse> {
}
