package com.ncm.electro.mapper.address;

import com.ncm.electro.dto.address.ProvinceRequest;
import com.ncm.electro.dto.address.ProvinceResponse;
import com.ncm.electro.entity.address.Province;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ProvinceMapper extends GenericMapper<Province, ProvinceRequest, ProvinceResponse> {
}
