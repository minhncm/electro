package com.ncm.electro.service.reward;

import com.ncm.electro.dto.client.ClientRewardResponse;
import com.ncm.electro.entity.general.Notification;
import com.ncm.electro.entity.general.NotificationStatus;
import com.ncm.electro.entity.general.NotificationType;
import com.ncm.electro.entity.order.Order;
import com.ncm.electro.entity.order.OrderStatus;
import com.ncm.electro.entity.order.PaymentStatus;
import com.ncm.electro.entity.review.Review;
import com.ncm.electro.entity.reward.RewardLog;
import com.ncm.electro.entity.reward.RewardStrategy;
import com.ncm.electro.entity.reward.RewardType;
import com.ncm.electro.mapper.client.ClientRewardLogMapper;
import com.ncm.electro.repository.general.NotificationRepository;
import com.ncm.electro.repository.reward.RewardLogRepository;
import com.ncm.electro.repository.reward.RewardStrategyRepository;
import com.ncm.electro.service.general.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RewardStrategyServiceImpl implements RewardStrategyService {
    private final NotificationService notificationService;

    private final NotificationRepository notificationRepository;
    private final RewardLogRepository rewardLogRepository;

    private final RewardStrategyRepository rewardStrategyRepository;
    private final ClientRewardLogMapper clientRewardLogMapper;

    private final ExpressionParser parser = new SpelExpressionParser();

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

    @Override
    public void earningRewardFromReview(Review review) {
        final int APPROVED = 2;
        final int ACTIVE = 1;

        if(!review.getStatus().equals(APPROVED)) {
            return;
        }

        Optional<RewardStrategy> rewardStrategy = rewardStrategyRepository.findByCodeAndStatus(
                RewardType.ADD_REVIEW, ACTIVE
        );

        if(rewardStrategy.isEmpty()) {
            return;
        }

        Integer score = parser.parseExpression(rewardStrategy.get().getFormula()).getValue(Integer.class);
        String note = String.format("Bạn đã nhận được %s điểm thưởng cho đánh giá ở sản phẩm %s.", score, review.getProduct().getName());

        RewardLog rewardLog = new RewardLog();
        rewardLog.setUser(review.getUser());
        rewardLog.setType(RewardType.ADD_REVIEW);
        rewardLog.setScore(score);
        rewardLog.setNote(note);
        rewardLogRepository.save(rewardLog);

        Notification notification = new Notification();
        notification.setUser(review.getUser());
        notification.setType(NotificationType.REVIEW);
        notification.setMessage(note);
        notification.setAnchor("/user/reward");
        notification.setStatus(NotificationStatus.UNREAD);
        notificationRepository.save(notification);

        notificationService.pushNotification(notification);
    }

    @Override
    public void earningRewardFromOrder(Order order) {
        final int ACTIVE = 1;

        if(!order.getStatus().equals(OrderStatus.DELIVERED.getValue())
                || !order.getPaymentStatus().equals(PaymentStatus.PAID)) {
            return;
        }

        Optional<RewardStrategy> rewardStrategy = rewardStrategyRepository.findByCodeAndStatus(
                RewardType.SUCCESS_ORDER, ACTIVE
        );

        if(rewardStrategy.isEmpty()) {
            return;
        }

        Integer score = parser.parseExpression(rewardStrategy.get().getFormula()
                .replace("{{ORDER_TOTAL_PAY}}", order.getTotalPay().toString()))
                .getValue(Integer.class);
        String note = String.format("Bạn đã nhận được %s điểm thưởng cho đơn hàng %s.", score, order.getCode());

        RewardLog rewardLog = new RewardLog();
        rewardLog.setUser(order.getUser());
        rewardLog.setType(RewardType.SUCCESS_ORDER);
        rewardLog.setScore(score);
        rewardLog.setNote(note);
        rewardLogRepository.save(rewardLog);

        Notification notification = new Notification();
        notification.setUser(order.getUser());
        notification.setType(NotificationType.ORDER);
        notification.setMessage(note);
        notification.setAnchor("/user/reward");
        notification.setStatus(NotificationStatus.UNREAD);
        notificationRepository.save(notification);

        notificationService.pushNotification(notification);
    }
}
