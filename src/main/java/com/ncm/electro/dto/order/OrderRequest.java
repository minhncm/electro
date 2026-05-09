package com.ncm.electro.dto.order;

import com.ncm.electro.entity.cashbook.PaymentMethodType;
import com.ncm.electro.entity.order.OrderVariant;
import com.ncm.electro.entity.order.PaymentStatus;
import lombok.Data;

import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Data
public class OrderRequest {
    private String code;
    private Integer status;
    private String toName;
    private String toPhone;
    private String toAddress;
    private String toWardName;
    private String toDistrictName;
    private String toProvinceName;
    private Long orderResourceId;
    private Long orderCancellationReasonId;
    private String note;
    private Long userId;
    private BigDecimal totalAmount;
    private BigDecimal tax;
    private BigDecimal shippingCost;
    private BigDecimal totalPay;
    private PaymentMethodType paymentMethodType;
    private PaymentStatus paymentStatus;
    private String paypalOrderId;
    private String paypalOrderStatus;
    private Set<OrderVariantRequest> orderVariants;
}
