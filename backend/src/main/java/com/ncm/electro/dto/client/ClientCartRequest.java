package com.ncm.electro.dto.client;

import lombok.Data;

import java.util.List;

@Data
public class ClientCartRequest {
    private Long userId;
    private List<ClientCartVariantRequest> cartItems;
    private Integer status;
}

