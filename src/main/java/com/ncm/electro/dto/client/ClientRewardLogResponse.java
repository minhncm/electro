package com.ncm.electro.dto.client;

import com.ncm.electro.entity.reward.RewardType;
import lombok.Data;

import java.time.Instant;

@Data
public class ClientRewardLogResponse {
    private Long id;
    private Instant createdAt;
    private Integer score;
    private RewardType type;
    private String note;
}
