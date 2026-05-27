package com.ncm.electro.entity.address;

import com.ncm.electro.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "district")
public class District extends BaseEntity {
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "code", nullable = false, length = 35)
    private String code;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "province_id", nullable = false)
    private Province province;

    @Column(name = "ghn_district_id")
    private Integer ghnDistrictId;

    @OneToMany(mappedBy = "district")
    private List<Address> addresses = new ArrayList<>();

    @OneToMany(mappedBy = "district")
    private List<Ward> wards = new ArrayList<>();

}