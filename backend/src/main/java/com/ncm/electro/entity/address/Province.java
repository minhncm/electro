package com.ncm.electro.entity.address;

import com.ncm.electro.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "province")
public class Province extends BaseEntity {
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "code", nullable = false, length = 35)
    private String code;

    @Column(name = "ghn_province_id")
    private Integer ghnProvinceId;

    @OneToMany(mappedBy = "province")
    private List<Address> addresses = new ArrayList<>();

    @OneToMany(mappedBy = "province")
    private List<District> districts = new ArrayList<>();

}