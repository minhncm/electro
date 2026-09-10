package com.ncm.electro.dto.client;

import com.ncm.electro.entity.cashbook.PaymentMethodType;
import lombok.Data;
import org.springframework.lang.Nullable;

@Data
public class ClientConfirmedOrderResponse {
    private String paypalOrderId;
    private PaymentMethodType paymentMethodType;
}
