package com.ncm.electro.dto.inventory;

import jakarta.annotation.Nullable;

public class TransferRequest {
    private String code;
    private DocketRequest exportDocket;
    private DocketRequest importDocket;
    @Nullable
    private String note;
}
