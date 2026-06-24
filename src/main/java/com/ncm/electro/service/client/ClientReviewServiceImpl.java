package com.ncm.electro.service.client;

import com.ncm.electro.constant.FieldName;
import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientReviewByProductResponse;
import com.ncm.electro.dto.client.ClientReviewRequest;
import com.ncm.electro.dto.client.ClientReviewResponse;
import com.ncm.electro.entity.review.Review;
import com.ncm.electro.exception.ResourceNotFoundException;
import com.ncm.electro.mapper.client.ClientReviewMapper;
import com.ncm.electro.repository.order.OrderRepository;
import com.ncm.electro.repository.review.ReviewRepository;
import com.ncm.electro.specification.ReviewSpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClientReviewServiceImpl implements ClientReviewService{
    private final OrderRepository orderRepository;
    private final ReviewRepository reviewRepository;
    private final ClientReviewMapper clientReviewMapper;
    @Override
    public ListResponse<ClientReviewByProductResponse> findAllByProductSlug(String slug, int page, int size, String sort, String filter) {
        Page<Review> reviews = reviewRepository.findAll(
                ReviewSpecification.filter(filter)
                        .and(ReviewSpecification.sort(sort))
                        .and(ReviewSpecification.hasProductSlug(slug)),
                PageRequest.of(page - 1, size));

        List<ClientReviewByProductResponse> clientReviewByProductResponses =
                reviews.map(clientReviewMapper::entityToReviewByProductResponse).toList();

        return ListResponse.of(clientReviewByProductResponses, reviews);
    }

    @Override
    public ListResponse<ClientReviewResponse> finaAllByUsername(String username, int page, int size, String sort, String filter) {
        Page<Review> reviews = reviewRepository.findAll(
                ReviewSpecification.filter(filter)
                        .and(ReviewSpecification.sort(sort))
                        .and(ReviewSpecification.hasUsername(username)),
                PageRequest.of(page - 1, size)
        );

        List<ClientReviewResponse> clientReviewResponses = clientReviewMapper.entityToResponse(reviews.toList());
        return ListResponse.of(clientReviewResponses, reviews);
    }

    @Override
    public ClientReviewResponse createReview(ClientReviewRequest request) {
        System.out.println(request);
        Review review = clientReviewMapper.requestToEntity(request);
        if(!orderRepository.existsDeliveredAndPaidByProductId(request.getProductId())) {
            throw new RuntimeException("Not allowed");
        }
        reviewRepository.save(review);
        return clientReviewMapper.entityToResponse(review);
    }

    @Override
    public ClientReviewResponse updateReview(Long id, ClientReviewRequest request) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException(Review.class.getSimpleName(), FieldName.ID, id));
        review = clientReviewMapper.partialUpdate(review, request);
        reviewRepository.save(review);
        return clientReviewMapper.entityToResponse(review);
    }

    @Override
    public void deleteAllByIds(List<Long> ids) {
        reviewRepository.deleteAllById(ids);
    }
}
