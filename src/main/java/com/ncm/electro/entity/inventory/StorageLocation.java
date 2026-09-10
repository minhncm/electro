package com.ncm.electro.entity.inventory;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.product.Variant;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "storage_location")
@AttributeOverrides({
        @AttributeOverride(name = "id", column = @Column(name = "variant_id", nullable = false))
})
public class StorageLocation extends BaseEntity {
    @MapsId
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "variant_id", referencedColumnName = "id", nullable = false, unique = true)
    private Variant variant;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "warehouse_id", nullable = false)
    private Warehouse warehouse;

    @Column(name = "name", nullable = false)
    private String name;

}