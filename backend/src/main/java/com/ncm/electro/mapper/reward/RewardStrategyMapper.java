package com.ncm.electro.mapper.reward;

import com.ncm.electro.dto.reward.RewardStrategyRequest;
import com.ncm.electro.dto.reward.RewardStrategyResponse;
import com.ncm.electro.entity.reward.RewardStrategy;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface RewardStrategyMapper extends GenericMapper<RewardStrategy, RewardStrategyRequest, RewardStrategyResponse> {
}
