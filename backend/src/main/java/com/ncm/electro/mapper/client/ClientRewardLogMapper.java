package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientRewardLogResponse;
import com.ncm.electro.entity.reward.RewardLog;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ClientRewardLogMapper {
    ClientRewardLogResponse entityToResponse(RewardLog rewardLog);
    List<ClientRewardLogResponse> entityToResponse(List<RewardLog> rewardLogs);
}
