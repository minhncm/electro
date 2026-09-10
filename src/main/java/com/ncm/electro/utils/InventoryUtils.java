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
        int available;
        int incoming = 0;
        int soldQuantity = 0;

        for (DocketVariant transaction : transactions) {
            var type = transaction.getDocket().getType();
            var status = transaction.getDocket().getStatus();
            int quantity = transaction.getQuantity();

            if (type.equals(InventoryConstants.IMPORT)
                    && status.equals(InventoryConstants.COMPLETED)) {
                inventory += quantity;
            }

            if (type.equals(InventoryConstants.EXPORT)
                    && status.equals(InventoryConstants.COMPLETED)) {
                inventory -= quantity;
                soldQuantity += quantity;
            }

            if(type.equals(InventoryConstants.IMPORT)
                    && List.of(InventoryConstants.NEW, InventoryConstants.PROCESSING).contains(status)) {
                incoming += quantity;
            }

            if(type.equals(InventoryConstants.EXPORT)
                    && List.of(InventoryConstants.NEW, InventoryConstants.PROCESSING).contains(status)) {
                waitingForDelivery += quantity;
            }
        }
        available = inventory - waitingForDelivery;

        Map<String, Integer> indices = new HashMap<>();

        indices.put("inventory", inventory);
        indices.put("waitingForDelivery", waitingForDelivery);
        indices.put("available", available);
        indices.put("incoming", incoming);
        indices.put("soldQuantity", soldQuantity);

        return indices;
    }
}
