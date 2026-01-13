package com.ncm.electro.mapper.employee;

import com.ncm.electro.dto.employee.OfficeRequest;
import com.ncm.electro.dto.employee.OfficeResponse;
import com.ncm.electro.entity.employee.Office;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OfficeMapper extends GenericMapper<Office, OfficeRequest, OfficeResponse> {
}
