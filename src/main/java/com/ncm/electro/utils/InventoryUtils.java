package com.ncm.electro.utils;

import com.ncm.electro.constant.InventoryConstants;
import com.ncm.electro.entity.inventory.DocketVariant;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class InventoryUtils {

    public static Map<String, Integer> calculateInventoryIndices(List<DocketVariant> transactions) {
        int inventory = 0;
        int waitingForDelivery = 0;
        int canBeSell;
        int areComing = 0;

        for (DocketVariant transaction : transactions) {
            if (transaction.getDocket().getType().equals(InventoryConstants.IMPORT)
                    && transaction.getDocket().getStatus().equals(InventoryConstants.COMPLETED)) {
                inventory += transaction.getQuantity();
            }

            if (transaction.getDocket().getType().equals(InventoryConstants.EXPORT)
                    && transaction.getDocket().getStatus().equals(InventoryConstants.COMPLETED)) {
                inventory -= transaction.getQuantity();
            }

            if(transaction.getDocket().getType().equals(InventoryConstants.IMPORT)
                    && List.of(InventoryConstants.NEW, InventoryConstants.PROCESSING).contains(transaction.getDocket().getStatus())) {
                areComing += transaction.getQuantity();
            }

            if(transaction.getDocket().getType().equals(InventoryConstants.EXPORT)
                    && List.of(InventoryConstants.NEW, InventoryConstants.PROCESSING).contains(transaction.getDocket().getStatus())) {
                waitingForDelivery += transaction.getQuantity();
            }
        }
        canBeSell = inventory - waitingForDelivery;

        Map<String, Integer> indices = new HashMap<>();

        indices.put("inventory", inventory);
        indices.put("waitingForDelivery", waitingForDelivery);
        indices.put("available", canBeSell);
        indices.put("incoming", areComing);

        return indices;
    }
}
