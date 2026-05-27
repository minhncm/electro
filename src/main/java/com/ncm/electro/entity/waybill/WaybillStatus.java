package com.ncm.electro.entity.waybill;

public enum WaybillStatus {
    WAITING_PICKUP(1),
    SHIPPING(2),
    DELIVERED(3),
    CANCELLED(4);
    ;

    private final int value;
    WaybillStatus(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }
}
