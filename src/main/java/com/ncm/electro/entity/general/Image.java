package com.ncm.electro.entity.general;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "image")
public class Image extends BaseEntity {
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "path", nullable = false)
    private String path;

    @Column(name = "content_type", nullable = false)
    private String contentType;

    @Column(name = "size", nullable = false)
    private Long size;

    @Column(name = "`group`", nullable = false)
    private String group;

    @Column(name = "is_thumbnail", nullable = false)
    private Boolean isThumbnail = false;

    @Column(name = "is_eliminated", nullable = false)
    private Boolean isEliminated = false;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id")
    private Product product;

}