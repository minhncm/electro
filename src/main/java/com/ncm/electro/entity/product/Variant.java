package com.ncm.electro.entity.product;

import com.fasterxml.jackson.databind.JsonNode;
import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.cart.CartVariant;
import com.ncm.electro.entity.inventory.*;
import com.ncm.electro.entity.order.OrderVariant;
import com.ncm.electro.utils.JsonNodeConverter;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "variant")
public class Variant extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "sku", nullable = false)
    private String sku;

    @Column(name = "cost", nullable = false)
    private Double cost;

    @Column(name = "price", nullable = false)
    private Double price;

    @Column(name = "properties", columnDefinition = "JSON")
    @Convert(converter = JsonNodeConverter.class)
    private JsonNode properties;

    @Column(name = "images", columnDefinition = "JSON")
    @Convert(converter = JsonNodeConverter.class)
    private JsonNode images;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @OneToMany(mappedBy = "variant")
    private Set<CartVariant> cartVariants = new HashSet<>();

    @OneToMany(mappedBy = "variant")
    private Set<CountVariant> countVariants = new HashSet<>();

    @OneToMany(mappedBy = "variant")
    private List<DocketVariant> docketVariants = new ArrayList<>();

    @OneToMany(mappedBy = "variant")
    private Set<OrderVariant> orderVariants = new HashSet<>();

    @OneToMany(mappedBy = "variant")
    private Set<PurchaseOrderVariant> purchaseOrderVariants = new HashSet<>();

    @OneToOne(mappedBy = "variant")
    private StorageLocation storageLocation;

    @OneToOne(mappedBy = "variant")
    private VariantInventoryLimit variantInventoryLimit;

}