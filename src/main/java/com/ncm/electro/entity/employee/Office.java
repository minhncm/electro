package com.ncm.electro.entity.employee;

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
@Table(name = "office")
public class Office extends BaseEntity {
    @Column(name = "name", nullable = false)
    private String name;

    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "address_id", nullable = false)
    private Address address;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @OneToMany(mappedBy = "office")
    private List<Employee> employees = new ArrayList<>();

}