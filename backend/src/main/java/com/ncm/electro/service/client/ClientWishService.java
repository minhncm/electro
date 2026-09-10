package com.ncm.electro.service.client;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientWishRequest;
import com.ncm.electro.dto.client.ClientWishResponse;

import java.util.List;

public interface ClientWishService {
    ListResponse<ClientWishResponse> findAllByUsername(String username, int page, int size, String sort, String filter);
    ClientWishResponse addWishItem(ClientWishRequest request);
    void delete(List<Long> ids);
}
