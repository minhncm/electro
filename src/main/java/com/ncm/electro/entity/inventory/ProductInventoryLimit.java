package com.ncm.electro.entity.inventory;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "product_inventory_limit")
@AttributeOverrides({
        @AttributeOverride(name = "id", column = @Column(name = "product_id", nullable = false))
})
public class ProductInventoryLimit extends BaseEntity {
    @MapsId
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id", referencedColumnName = "id", nullable = false, unique = true)
    private Product product;

    @Column(name = "minimum_limit")
    private Integer minimumLimit;

    @Column(name = "maximum_limit")
    private Integer maximumLimit;

}