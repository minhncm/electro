package com.ncm.electro.dto.client;

import com.ncm.electro.entity.order.PaymentStatus;
import lombok.Data;

import java.time.Instant;
import java.util.Set;

@Data
public class ClientSimpleOrderResponse {
    private Long id;
    private Instant createdAt;
    private String code;
    private Integer status;
    private Double totalPay;
    private Set<ClientOrderVariantResponse> orderVariants;
    private PaymentStatus paymentStatus;

}
