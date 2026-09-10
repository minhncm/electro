package com.ncm.electro.entity.product;

import com.ncm.electro.entity.BaseEntity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "tag")
public class Tag extends BaseEntity {
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "slug", nullable = false)
    private String slug;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @ManyToMany(mappedBy = "tags")
    private Set<Product> products = new HashSet<>();

}