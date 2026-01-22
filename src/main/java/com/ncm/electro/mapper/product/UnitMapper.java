package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.UnitRequest;
import com.ncm.electro.dto.product.UnitResponse;
import com.ncm.electro.entity.product.Unit;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UnitMapper extends GenericMapper<Unit, UnitRequest, UnitResponse> {
}
