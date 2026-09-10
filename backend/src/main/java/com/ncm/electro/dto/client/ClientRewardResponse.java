package com.ncm.electro.dto.client;

import lombok.Data;

import java.util.List;

@Data
public class ClientRewardResponse {
    private Integer totalScore;
    private List<ClientRewardLogResponse> rewardLogs;
}
