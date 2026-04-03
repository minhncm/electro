package com.ncm.electro.service.client;

import com.ncm.electro.dto.CollectionWrapper;
import com.ncm.electro.dto.client.ClientCategoryResponse;
import com.ncm.electro.dto.client.ClientFilterResponse;

import java.util.List;

public interface ClientCategoryService {
    CollectionWrapper<ClientCategoryResponse> findAll();
    ClientCategoryResponse findBySlug(String slug);
    ClientFilterResponse findFilterBySlug(String slug);
}
