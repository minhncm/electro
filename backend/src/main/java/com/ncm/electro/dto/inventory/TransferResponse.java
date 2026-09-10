package com.ncm.electro.dto.inventory;

import com.ncm.electro.dto.BaseResponse;
import jakarta.annotation.Nullable;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper = true)
public class TransferResponse extends BaseResponse {
    private String code;
    private DocketResponse exportDocket;
    private DocketResponse importDocket;
    @Nullable
    private String note;
}
