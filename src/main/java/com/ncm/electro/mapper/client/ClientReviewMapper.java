package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientReviewByProductResponse;
import com.ncm.electro.dto.client.ClientReviewRequest;
import com.ncm.electro.dto.client.ClientReviewResponse;
import com.ncm.electro.entity.review.Review;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = ClientProductMapper.class)
public interface ClientReviewMapper extends GenericMapper<Review, ClientReviewRequest, ClientReviewResponse> {
    ClientReviewByProductResponse entityToReviewByProductResponse(Review review);
}
