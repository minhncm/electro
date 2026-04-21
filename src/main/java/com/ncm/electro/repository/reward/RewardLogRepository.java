package com.ncm.electro.repository.reward;

import com.ncm.electro.entity.reward.RewardLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RewardLogRepository extends JpaRepository<RewardLog, Long>, JpaSpecificationExecutor<RewardLog> {

    @Query("SELECT SUM(r.score) FROM RewardLog r JOIN r.user u where u.username =: username")
    int sumScoreByUsername(String username);

    List<RewardLog> findByUserUsername(String username);
}