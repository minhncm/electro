package com.ncm.electro.service.client;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientReviewByProductResponse;
import com.ncm.electro.dto.client.ClientReviewRequest;
import com.ncm.electro.dto.client.ClientReviewResponse;

import java.util.List;

public interface ClientReviewService {
    ListResponse<ClientReviewByProductResponse> findAllByProductSlug(String slug, int page, int size, String sort, String filter);
    ListResponse<ClientReviewResponse> finaAllByUsername(String username, int page, int size, String sort, String filter);
    ClientReviewResponse save(ClientReviewRequest request);
    void deleteAllByIds(List<Long> ids);
}
