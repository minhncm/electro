package com.ncm.electro.dto.inventory;

import com.ncm.electro.entity.inventory.Destination;
import com.ncm.electro.entity.inventory.Docket;
import com.ncm.electro.entity.inventory.PurchaseOrderVariant;
import com.ncm.electro.entity.product.Supplier;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
public class PurchaseOrderRequest {
    private String code;
    private Long supplierId;
    private Long destinationId;
    private Double totalAmount;
    private String note;
    private Integer status;
    private Set<PurchaseOrderVariantRequest> purchaseOrderVariants;
}
