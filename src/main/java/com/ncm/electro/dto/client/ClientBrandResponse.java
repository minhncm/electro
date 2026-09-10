package com.ncm.electro.dto.client;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ClientBrandResponse {
    private Long id;
    private String name;
}
