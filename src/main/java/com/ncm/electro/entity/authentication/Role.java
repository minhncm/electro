package com.ncm.electro.entity.authentication;

import com.ncm.electro.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "role")
public class Role extends BaseEntity {
    @Column(name = "code", nullable = false, length = 35)
    private String code;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

    @ManyToMany(mappedBy = "roles")
    private Set<User> users = new HashSet<>();

}