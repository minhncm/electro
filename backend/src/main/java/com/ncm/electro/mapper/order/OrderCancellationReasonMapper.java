package com.ncm.electro.mapper.order;

import com.ncm.electro.dto.order.OrderCancellationReasonRequest;
import com.ncm.electro.dto.order.OrderCancellationReasonResponse;
import com.ncm.electro.entity.order.OrderCancellationReason;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface OrderCancellationReasonMapper extends GenericMapper<OrderCancellationReason, OrderCancellationReasonRequest, OrderCancellationReasonResponse> {
}
