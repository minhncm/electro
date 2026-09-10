package com.ncm.electro.entity.inventory;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.product.Variant;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "variant_inventory_limit")
@AttributeOverrides({
        @AttributeOverride(name = "id", column = @Column(name = "variant_id", nullable = false))
})
public class VariantInventoryLimit extends BaseEntity {
    @MapsId
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "variant_id", referencedColumnName = "id", nullable = false, unique = true)
    private Variant variant;

    @Column(name = "minimum_limit")
    private Integer minimumLimit;

    @Column(name = "maximum_limit")
    private Integer maximumLimit;

}