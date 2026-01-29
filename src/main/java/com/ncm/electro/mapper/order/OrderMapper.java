package com.ncm.electro.mapper.order;

import com.ncm.electro.dto.order.OrderRequest;
import com.ncm.electro.dto.order.OrderResponse;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderMapper extends GenericMapper<Order, OrderRequest, OrderResponse> {
}
