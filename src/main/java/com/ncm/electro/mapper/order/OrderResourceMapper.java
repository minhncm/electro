package com.ncm.electro.mapper.order;

import com.ncm.electro.dto.order.OrderResourceRequest;
import com.ncm.electro.dto.order.OrderResourceResponse;
import com.ncm.electro.entity.order.OrderResource;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = MapperUtils.class)
public interface OrderResourceMapper extends GenericMapper<OrderResource, OrderResourceRequest, OrderResourceResponse> {
    @Mapping(source = "customerResourceId", target = "customerResource")
    OrderResource requestToEntity(OrderResourceRequest request);

    @Mapping(source = "customerResourceId", target = "customerResource")
    OrderResource partialUpdate(@MappingTarget OrderResource entity, OrderResourceRequest request);
}
