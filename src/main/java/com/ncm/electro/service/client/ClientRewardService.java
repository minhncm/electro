package com.ncm.electro.service.client;

import com.ncm.electro.dto.client.ClientRewardResponse;

public interface ClientRewardService {
    ClientRewardResponse findByUsername(String username);
}
