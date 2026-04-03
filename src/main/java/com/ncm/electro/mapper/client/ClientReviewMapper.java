package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientReviewByProductResponse;
import com.ncm.electro.entity.review.Review;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;


@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ClientReviewMapper {
    ClientReviewByProductResponse entityToResponse(Review review);
}
