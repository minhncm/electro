package com.ncm.electro.entity.order;

import org.springframework.security.core.parameters.P;

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

    public int getValue() {
        return value;
    }
}
