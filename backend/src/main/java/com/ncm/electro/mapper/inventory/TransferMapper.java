package com.ncm.electro.mapper.inventory;

import com.ncm.electro.dto.inventory.TransferRequest;
import com.ncm.electro.dto.inventory.TransferResponse;
import com.ncm.electro.entity.inventory.Transfer;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface TransferMapper extends GenericMapper<Transfer, TransferRequest, TransferResponse> {
}
