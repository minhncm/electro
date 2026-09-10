package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.DocketReasonRequest;
import com.ncm.electro.dto.inventory.DocketReasonResponse;
import com.ncm.electro.entity.inventory.DocketReason;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface DocketReasonMapper extends GenericMapper<DocketReason, DocketReasonRequest, DocketReasonResponse> {
}
