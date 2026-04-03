package com.ncm.electro.projection.inventory;

import com.ncm.electro.entity.inventory.DocketVariant;
import com.ncm.electro.entity.product.Product;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
public class ProductInventory {
    private Product product;
    private List<DocketVariant> transactions;
    private Integer inventory;
    private Integer waitingForDelivery;
    private Integer available;
    private Integer incoming;

}
