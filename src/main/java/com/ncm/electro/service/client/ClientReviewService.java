package com.ncm.electro.service.client;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientReviewByProductResponse;

public interface ClientReviewService {
    ListResponse<ClientReviewByProductResponse> findAllByProductSlug(String slug, int page, int size, String sort, String filter);
}
