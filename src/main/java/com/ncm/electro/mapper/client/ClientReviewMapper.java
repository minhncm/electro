package com.ncm.electro.mapper.client;

import com.ncm.electro.dto.client.ClientReviewByProductResponse;
import com.ncm.electro.dto.client.ClientReviewRequest;
import com.ncm.electro.dto.client.ClientReviewResponse;
import com.ncm.electro.dto.review.ReviewRequest;
import com.ncm.electro.entity.review.Review;
import com.ncm.electro.mapper.GenericMapper;
import com.ncm.electro.utils.MapperUtils;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.ReportingPolicy;
@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE, uses = {ClientProductMapper.class, MapperUtils.class})
public interface ClientReviewMapper extends GenericMapper<Review, ClientReviewRequest, ClientReviewResponse> {
    ClientReviewByProductResponse entityToReviewByProductResponse(Review review);

    @Override
    @Mapping(source = "userId", target = "user")
    @Mapping(source = "productId", target = "product")
    Review requestToEntity(ClientReviewRequest request);

    @Override
    @Mapping(source = "userId", target = "user")
    @Mapping(source = "productId", target = "product")
    Review partialUpdate(@MappingTarget Review entity, ClientReviewRequest request);
}
