package com.ncm.electro.service.review;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.constant.SearchFields;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.review.ReviewRequest;
import com.ncm.electro.dto.review.ReviewResponse;
import com.ncm.electro.entity.review.Review;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.mapper.review.ReviewMapper;
import com.ncm.electro.repository.review.ReviewRepository;
import com.ncm.electro.service.reward.RewardStrategyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewServiceImpl implements ReviewService{
    private final RewardStrategyService rewardStrategyService;
    private final ReviewRepository reviewRepository;
    private final ReviewMapper reviewMapper;
    @Override
    public ListResponse<ReviewResponse> findAll(int page, int size, String sort, String filter, String search, boolean all) {
        return defaultFindAll(page, size, sort, filter, search, all, SearchFields.REVIEW, reviewRepository, reviewMapper);
    }

    @Override
    public ReviewResponse findById(Long id) {
        return defaultFindById(id, reviewRepository, reviewMapper, Review.class.getSimpleName());
    }

    @Override
    public ReviewResponse save(ReviewRequest request) {
        return defaultSave(request, reviewRepository, reviewMapper);
    }

    @Override
    public ReviewResponse save(Long id, ReviewRequest request) {
        Review review = reviewRepository.findById(id)
                .map(existingEntity -> reviewMapper.partialUpdate(existingEntity, request))
                .map(reviewRepository::save)
                .orElseThrow(() -> new ResourceNotFoundException(Review.class.getSimpleName(), FieldName.ID, id));

        rewardStrategyService.earningRewardFromReview(review);

        return reviewMapper.entityToResponse(review);
    }

    @Override
    public void delete(Long id) {
        reviewRepository.deleteById(id);
    }

    @Override
    public void delete(List<Long> ids) {
        reviewRepository.deleteAllById(ids);
    }
}
