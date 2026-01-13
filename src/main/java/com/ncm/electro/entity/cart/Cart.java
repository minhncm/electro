package com.ncm.electro.entity.cart;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.authentication.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "cart")
public class Cart extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status; // 1: normal, 2: complete

    @OneToMany(mappedBy = "cart")
    private Set<CartVariant> cartVariants = new HashSet<>();

}