package com.ncm.electro.entity.order;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.customer.CustomerResource;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "order_resource")
public class OrderResource extends BaseEntity {
    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "color", nullable = false)
    private String color;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_resource_id")
    private CustomerResource customerResource;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @OneToMany(mappedBy = "orderResource")
    private List<Order> orders = new ArrayList<>();

}