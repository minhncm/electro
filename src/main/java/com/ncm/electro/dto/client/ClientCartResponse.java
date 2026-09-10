package com.ncm.electro.dto.client;

import lombok.Data;

import java.util.Set;

@Data
public class ClientCartResponse {
    private Long id;
    private Set<ClientCartVariantResponse> cartVariants;
}
