package com.ncm.electro.entity.inventory;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.product.Supplier;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.*;

@Getter
@Setter
@Entity
@Table(name = "purchase_order")
public class PurchaseOrder extends BaseEntity {
    @Column(name = "code", nullable = false)
    private String code;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "supplier_id", nullable = false)
    private Supplier supplier;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "destination_id", nullable = false)
    private Destination destination;

    @Column(name = "total_amount", nullable = false)
    private Double totalAmount;

    @Column(name = "note")
    private String note;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @OneToMany(mappedBy = "purchaseOrder")
    private List<Docket> dockets = new ArrayList<>();

    @OneToMany(mappedBy = "purchaseOrder")
    private Set<PurchaseOrderVariant> purchaseOrderVariants = new HashSet<>();

}