package com.ncm.electro.mapper.promotion;

import com.ncm.electro.dto.client.ClientPromotionResponse;
import com.ncm.electro.dto.promotion.PromotionRequest;
import com.ncm.electro.dto.promotion.PromotionResponse;
import com.ncm.electro.entity.promotion.Promotion;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PromotionMapper extends GenericMapper<Promotion, PromotionRequest, PromotionResponse> {
}
