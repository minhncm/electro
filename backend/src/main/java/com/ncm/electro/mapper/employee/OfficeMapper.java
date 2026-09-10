package com.ncm.electro.mapper.employee;

import com.ncm.electro.dto.employee.OfficeRequest;
import com.ncm.electro.dto.employee.OfficeResponse;
import com.ncm.electro.entity.employee.Office;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.mapper.address.AddressMapper;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = AddressMapper.class)
public interface OfficeMapper extends GenericMapper<Office, OfficeRequest, OfficeResponse> {
}
