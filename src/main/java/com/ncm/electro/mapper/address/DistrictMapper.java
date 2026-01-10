package com.ncm.electro.mapper.address;

import com.ncm.electro.dto.address.DistrictRequest;
import com.ncm.electro.dto.address.DistrictResponse;
import com.ncm.electro.entity.address.District;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface DistrictMapper extends GenericMapper<District, DistrictRequest, DistrictResponse> {
}

