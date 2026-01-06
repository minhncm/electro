package com.ncm.electro.entity.order;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.cashbook.PaymentMethodType;
import com.ncm.electro.entity.waybill.Waybill;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.entity.inventory.Docket;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.*;

@Getter
@Setter
@Entity
@Table(name = "`order`")
public class Order extends BaseEntity {
    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @Column(name = "to_name", nullable = false)
    private String toName;

    @Column(name = "to_phone", nullable = false)
    private String toPhone;

    @Column(name = "to_address", nullable = false)
    private String toAddress;

    @Column(name = "to_ward_name", nullable = false)
    private String toWardName;

    @Column(name = "to_district_name", nullable = false)
    private String toDistrictName;

    @Column(name = "to_province_name", nullable = false)
    private String toProvinceName;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "order_resource_id", nullable = false)
    private OrderResource orderResource;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_cancellation_reason_id")
    private OrderCancellationReason orderCancellationReason;

    @Column(name = "note")
    private String note;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "total_amount", nullable = false, precision = 15, scale = 5)
    private BigDecimal totalAmount;

    @Column(name = "tax", nullable = false, precision = 15, scale = 5)
    private BigDecimal tax;

    @Column(name = "shipping_cost", nullable = false, precision = 15, scale = 5)
    private BigDecimal shippingCost;

    @Column(name = "total_pay", nullable = false, precision = 15, scale = 5)
    private BigDecimal totalPay;

    @Column(name = "payment_method_type", nullable = false)
    @Enumerated(EnumType.STRING)
    private PaymentMethodType paymentMethodType;

    @Column(name = "payment_status", nullable = false, columnDefinition = "TINYINT")
    private Integer paymentStatus;

    @Column(name = "paypal_order_id")
    private String paypalOrderId;

    @Column(name = "paypal_order_status")
    private String paypalOrderStatus;

    @OneToMany(mappedBy = "order")
    private List<Docket> dockets = new ArrayList<>();

    @OneToMany(mappedBy = "order")
    private Set<OrderVariant> orderVariants = new HashSet<>();

    @OneToOne(mappedBy = "order")
    private Waybill waybill;

}