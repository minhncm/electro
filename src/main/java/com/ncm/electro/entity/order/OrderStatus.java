package com.ncm.electro.entity.order;

import lombok.Getter;

@Getter
public enum OrderStatus {
    NEW(1),
    PROCESSING(2),
    SHIPPING(3),
    DELIVERED(4),
    CANCELLED(5);


    private final int value;
    OrderStatus(int value) {
        this.value = value;
    }

}
