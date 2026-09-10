package com.ncm.electro.dto.client;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
public class ClientFilterResponse {
    private PriceRange priceRange;
    private List<ClientBrandResponse> brands;

    @Data
    @AllArgsConstructor
    public static class PriceRange {
        private Double min;
        private Double max;
    }
}
