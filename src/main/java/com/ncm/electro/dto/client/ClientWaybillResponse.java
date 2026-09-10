package com.ncm.electro.dto.client;

import lombok.Data;
import org.springframework.lang.Nullable;

import java.time.Instant;
import java.util.List;

@Data
public class ClientWaybillResponse {
    private String code;
    private Instant expectedDeliveryTime;
    private List<ClientWaybillLogResponse> waybillLogs;

    @Data
    public static class ClientWaybillLogResponse {
        private Long id;
        private Instant createdAt;
        @Nullable
        private Integer previousStatus;
        @Nullable
        private Integer currentStatus;
    }
}
