package com.ncm.electro.dto;

import lombok.Data;

import java.time.Instant;

@Data
public abstract class BaseResponse {
    private Long id;
    private Instant createdAt;
    private Instant updatedAt;
}
