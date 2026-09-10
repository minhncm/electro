package com.ncm.electro.mapper.order;

import com.ncm.electro.dto.order.OrderVariantRequest;
import com.ncm.electro.dto.order.OrderVariantResponse;
import com.ncm.electro.entity.order.OrderVariant;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderVariantMapper extends GenericMapper<OrderVariant, OrderVariantRequest, OrderVariantResponse> {
    @Override
    @Mapping(source = "variantId", target = "variant.id")
    OrderVariant requestToEntity(OrderVariantRequest request);

    @Override
    @Mapping(source = "variantId", target = "variant.id")
    OrderVariant partialUpdate(@MappingTarget OrderVariant entity, OrderVariantRequest request);
}
