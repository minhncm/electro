package com.ncm.electro.entity.client;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.product.Product;
import com.ncm.electro.entity.authentication.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "preorder")
public class Preorder extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    // 3 trạng thái: chờ thông báo,đã thông báo có hàng, hủy thông báo
    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

}