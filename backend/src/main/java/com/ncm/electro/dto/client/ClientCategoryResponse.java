package com.ncm.electro.dto.client;

import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class ClientCategoryResponse {
    private String name;
    private String slug;
    private List<ClientCategoryResponse> children;
    @Nullable
    private ClientCategoryResponse parent;
}
