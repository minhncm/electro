package com.ncm.electro.mapper.address;

import com.ncm.electro.dto.address.DistrictRequest;
import com.ncm.electro.dto.address.DistrictResponse;
import com.ncm.electro.entity.address.District;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = MapperUtils.class)
public interface DistrictMapper extends GenericMapper<District, DistrictRequest, DistrictResponse> {
    @Override
    @Mapping(source = "provinceId", target = "province")
    District requestToEntity(DistrictRequest request);
}

