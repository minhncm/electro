package com.ncm.electro.entity.inventory;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.address.Address;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "warehouse")
public class Warehouse extends BaseEntity {
    @Column(name = "code", nullable = false)
    private String code;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id", unique = true)
    private Address address;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @OneToMany(mappedBy = "warehouse")
    private List<Count> counts = new ArrayList<>();

    @OneToMany(mappedBy = "warehouse")
    private List<Docket> dockets = new ArrayList<>();

    @OneToMany(mappedBy = "warehouse")
    private List<StorageLocation> storageLocations = new ArrayList<>();

}