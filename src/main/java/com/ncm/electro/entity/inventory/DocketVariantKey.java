package com.ncm.electro.entity.inventory;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
@Embeddable
public class DocketVariantKey implements Serializable {
    @Column(name = "docket_id", nullable = false)
    private Long docketId;

    @Column(name = "variant_id", nullable = false)
    private Long variantId;

}