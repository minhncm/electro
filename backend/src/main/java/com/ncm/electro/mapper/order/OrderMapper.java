package com.ncm.electro.mapper.order;

import com.ncm.electro.dto.order.OrderRequest;
import com.ncm.electro.dto.order.OrderResponse;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.mapper.authentication.UserMapper;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.*;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE,
        uses = {OrderVariantMapper.class, UserMapper.class, OrderResourceMapper.class, OrderCancellationReasonMapper.class, MapperUtils.class})
public interface OrderMapper extends GenericMapper<Order, OrderRequest, OrderResponse> {

    @Override
    @BeanMapping(qualifiedByName = "attachOrder")
    @Mapping(source = "orderResourceId", target = "orderResource")
    @Mapping(source = "orderCancellationReasonId", target = "orderCancellationReason")
    @Mapping(source = "userId", target = "user")
    Order requestToEntity(OrderRequest request);

    @Override
    @BeanMapping(qualifiedByName = "attachOrder")
    @Mapping(source = "orderResourceId", target = "orderResource")
    @Mapping(source = "orderCancellationReasonId", target = "orderCancellationReason")
    @Mapping(source = "userId", target = "user")
    Order partialUpdate(@MappingTarget Order entity, OrderRequest request);
}
