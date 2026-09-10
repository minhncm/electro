package com.ncm.electro.service.reward;

import com.ncm.electro.dto.client.ClientRewardResponse;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.entity.review.Review;

public interface RewardStrategyService {
    ClientRewardResponse findByUsername(String username);
    void earningRewardFromReview(Review review);
    void earningRewardFromOrder(Order order);
}
