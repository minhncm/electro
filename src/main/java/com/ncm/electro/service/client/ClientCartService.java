package com.ncm.electro.service.client;

import com.ncm.electro.dto.client.ClientCartRequest;
import com.ncm.electro.dto.client.ClientCartResponse;
import com.ncm.electro.dto.client.ClientCartVariantKeyRequest;

import java.util.List;

public interface ClientCartService {
    ClientCartResponse findByUsername(String username);
    ClientCartResponse addCartItem(ClientCartRequest request);
    ClientCartResponse updateCartItem(ClientCartRequest request);
    void deleteCartItems(List<ClientCartVariantKeyRequest> idRequests);
}
