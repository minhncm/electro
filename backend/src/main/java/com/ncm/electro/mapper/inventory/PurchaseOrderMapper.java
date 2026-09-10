package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.PurchaseOrderRequest;
import com.ncm.electro.dto.inventory.PurchaseOrderResponse;
import com.ncm.electro.entity.inventory.PurchaseOrder;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PurchaseOrderMapper extends GenericMapper<PurchaseOrder, PurchaseOrderRequest, PurchaseOrderResponse> {
}
