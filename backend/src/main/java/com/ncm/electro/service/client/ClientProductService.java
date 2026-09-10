package com.ncm.electro.service.client;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientListedProductResponse;
import com.ncm.electro.dto.client.ClientProductResponse;

public interface ClientProductService {
    ListResponse<ClientListedProductResponse> findAll(int page, int size, String filter, String sort,
                                                      String search, boolean saleable);

    ClientProductResponse findBySlug(String slug);
}
