package com.ncm.electro.service.client;

import com.ncm.electro.dto.client.ClientRewardLogResponse;
import com.ncm.electro.dto.client.ClientRewardResponse;
import com.ncm.electro.entity.reward.RewardLog;
import com.ncm.electro.mapper.client.ClientRewardLogMapper;
import com.ncm.electro.repository.reward.RewardLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientRewardServiceImpl implements ClientRewardService{
    private final RewardLogRepository rewardLogRepository;
    private final ClientRewardLogMapper clientRewardLogMapper;
    @Override
    public ClientRewardResponse findByUsername(String username) {
        int totalScore = rewardLogRepository.sumScoreByUsername(username);
        List<RewardLog> rewardLogs = rewardLogRepository.findByUserUsername(username).stream()
                .sorted(Comparator.comparing(RewardLog::getId).reversed())
                .toList();
        ClientRewardResponse response = new ClientRewardResponse();
        response.setTotalScore(totalScore);
        response.setRewardLogs(clientRewardLogMapper.entityToResponse(rewardLogs));
        return response;
    }
}
