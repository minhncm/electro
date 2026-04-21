package com.ncm.electro.service.client;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.client.ClientOrderResponse;
import com.ncm.electro.dto.client.ClientSimpleOrderResponse;

public interface ClientOrderService {
    ListResponse<ClientSimpleOrderResponse> findAllByUsername(String username, int page, int size, String sort, String filter);
    ClientOrderResponse findByCode(String code);
}
