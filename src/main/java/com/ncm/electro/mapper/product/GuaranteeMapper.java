package com.ncm.electro.mapper.product;

import com.ncm.electro.dto.product.GuaranteeRequest;
import com.ncm.electro.dto.product.GuaranteeResponse;
import com.ncm.electro.entity.product.Guarantee;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface GuaranteeMapper extends GenericMapper<Guarantee, GuaranteeRequest, GuaranteeResponse> {
}
