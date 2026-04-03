package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientBrandResponse;
import com.ncm.electro.entity.product.Brand;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ClientBrandMapper {
    ClientBrandResponse entityToResponse(Brand brand);
}
