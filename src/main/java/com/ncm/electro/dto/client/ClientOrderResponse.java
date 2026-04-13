package com.ncm.electro.dto.client;

import com.ncm.electro.entity.cashbook.PaymentMethodType;
import lombok.Data;
import org.springframework.lang.Nullable;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.Set;

@Data
public class ClientOrderResponse {
    private Long id;
    private Instant createdAt;
    private String code;
    private Integer status;
    private String toName;
    private String toPhone;
    private String toAddress;
    private String toWardName;
    private String toDistrictName;
    private String toProvinceName;
    private BigDecimal totalAmount;
    private BigDecimal tax;
    private BigDecimal shippingCost;
    private BigDecimal totalPay;
    private PaymentMethodType paymentMethodType;
    private Integer paymentStatus;
    private Set<ClientOrderVariantResponse> orderVariants;
    @Nullable
    private ClientWaybillResponse waybill;
}
