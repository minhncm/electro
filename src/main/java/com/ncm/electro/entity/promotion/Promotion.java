package com.ncm.electro.entity.promotion;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "promotion")
public class Promotion extends BaseEntity {
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "start_date", nullable = false)
    private Instant startDate;

    @Column(name = "end_date", nullable = false)
    private Instant endDate;

    @Column(name = "percent", nullable = false)
    private Integer percent;

    @Column(name = "status", nullable = false)
    private Byte status;

    @ManyToMany(mappedBy = "promotions")
    @JoinTable(
            name = "promotion_product",
            joinColumns = @JoinColumn(name = "promotion_id", nullable = false),
            inverseJoinColumns = @JoinColumn(name = "product_id", nullable = false))
    private Set<Product> products = new HashSet<>();

}