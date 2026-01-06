package com.ncm.electro.entity.review;

import com.ncm.electro.entity.BaseEntity;
import com.ncm.electro.entity.authentication.User;
import com.ncm.electro.entity.product.Product;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "review")
public class Review extends BaseEntity {
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "rating_score", nullable = false, columnDefinition = "TINYINT")
    private Integer ratingScore;

    @Lob
    @Column(name = "content", nullable = false)
    private String content;

    @Lob
    @Column(name = "reply")
    private String reply;

    @Column(name = "status", nullable = false, columnDefinition = "TINYINT")
    private Integer status;

}