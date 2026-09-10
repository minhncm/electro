package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.DocketRequest;
import com.ncm.electro.dto.inventory.DocketResponse;
import com.ncm.electro.entity.inventory.Docket;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface DocketMapper extends GenericMapper<Docket, DocketRequest, DocketResponse> {
}
