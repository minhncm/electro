package com.ncm.electro.mapper.order;

import com.ncm.electro.dto.order.OrderResourceRequest;
import com.ncm.electro.dto.order.OrderResourceResponse;
import com.ncm.electro.entity.order.OrderResource;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderResourceMapper extends GenericMapper<OrderResource, OrderResourceRequest, OrderResourceResponse> {
}
