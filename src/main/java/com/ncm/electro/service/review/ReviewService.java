package com.ncm.electro.service.review;

import com.ncm.electro.dto.review.ReviewRequest;
import com.ncm.electro.dto.review.ReviewResponse;
import com.ncm.electro.service.CrudService;

public interface ReviewService extends CrudService<Long, ReviewRequest, ReviewResponse> {
}
