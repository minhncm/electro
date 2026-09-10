package com.ncm.electro.service.inventory;

import com.ncm.electro.dto.ListResponse;
import com.ncm.electro.dto.inventory.ProductInventoryResponse;

public interface ProductInventoryService {
    ListResponse<ProductInventoryResponse> findAll(int page, int size);
}
