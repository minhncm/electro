package com.ncm.electro.service.client;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientReviewByProductResponse;
import com.ncm.electro.entity.review.Review;
import com.ncm.electro.mapper.client.ClientReviewMapper;
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
    private final ReviewRepository reviewRepository;
    private final ClientReviewMapper clientReviewMapper;
    @Override
    public ListResponse<ClientReviewByProductResponse> findAllByProductSlug(String slug, int page, int size, String sort, String filter) {
        Page<Review> reviews = reviewRepository.findAll(
                ReviewSpecification.filter(filter)
                        .and(ReviewSpecification.sort(sort))
                        .and(ReviewSpecification.isProductSlug(slug)),
                PageRequest.of(page - 1, size));

        List<ClientReviewByProductResponse> clientReviewByProductResponses =
                reviews.map(clientReviewMapper::entityToResponse).toList();

        return ListResponse.of(clientReviewByProductResponses, reviews);
    }
}
