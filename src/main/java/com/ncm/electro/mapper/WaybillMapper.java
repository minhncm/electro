package com.ncm.electro.mapper;

import com.ncm.electro.dto.waybill.WaybillRequest;
import com.ncm.electro.dto.waybill.WaybillResponse;
import com.ncm.electro.entity.waybill.Waybill;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface WaybillMapper extends GenericMapper<Waybill, WaybillRequest, WaybillResponse>{
}
