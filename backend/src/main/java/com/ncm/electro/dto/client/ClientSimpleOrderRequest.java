package com.ncm.electro.dto.client;

import com.ncm.electro.entity.cashbook.PaymentMethodType;
import lombok.Data;

import java.util.List;

@Data
public class ClientSimpleOrderRequest {
    private List<ClientCartVariantKeyRequest> cartItemIds;
    private PaymentMethodType paymentMethodType;
}
