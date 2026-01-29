package com.ncm.electro.mapper.review;

import com.ncm.electro.dto.review.ReviewRequest;
import com.ncm.electro.dto.review.ReviewResponse;
import com.ncm.electro.entity.review.Review;
import com.ncm.electro.mapper.GenericMapper;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReviewMapper extends GenericMapper<Review, ReviewRequest, ReviewResponse> {
}
