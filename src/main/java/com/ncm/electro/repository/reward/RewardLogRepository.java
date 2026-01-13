package com.ncm.electro.repository.reward;

import com.ncm.electro.entity.reward.RewardLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface RewardLogRepository extends JpaRepository<RewardLog, Long>, JpaSpecificationExecutor<RewardLog> {
}