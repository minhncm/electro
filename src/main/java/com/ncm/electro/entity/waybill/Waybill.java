package com.ncm.electro.entity.waybill;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.order.Order;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "waybill")
public class Waybill extends BaseEntity {
    @Column(name = "code", nullable = false)
    private String code;

    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "order_id", referencedColumnName = "id", nullable = false, unique = true)
    private Order order;

    @Column(name = "shipping_date", nullable = false)
    private Instant shippingDate;

    @Column(name = "expected_delivery_time", nullable = false)
    private Instant expectedDeliveryTime;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @Column(name = "cod_amount", nullable = false)
    private Integer codAmount;

    @Column(name = "shipping_fee", nullable = false)
    private Integer shippingFee;

    @Column(name = "weight", nullable = false)
    private Integer weight;

    @Column(name = "length", nullable = false)
    private Integer length;

    @Column(name = "width", nullable = false)
    private Integer width;

    @Column(name = "height", nullable = false)
    private Integer height;

    @Column(name = "note")
    private String note;

    @Column(name = "ghn_payment_type_id", nullable = false)
    private Integer ghnPaymentTypeId;

    @Column(name = "ghn_required_note", nullable = false)
    @Enumerated(EnumType.STRING)
    private RequiredNote ghnRequiredNote;

    @OneToMany(mappedBy = "waybill")
    private List<WaybillLog> waybillLogs = new ArrayList<>();

}