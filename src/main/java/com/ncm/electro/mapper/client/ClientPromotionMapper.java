package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientPromotionResponse;
import com.ncm.electro.entity.promotion.Promotion;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ClientPromotionMapper {
    ClientPromotionResponse entityToResponse(Promotion promotion);
}
