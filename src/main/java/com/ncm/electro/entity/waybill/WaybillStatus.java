package com.ncm.electro.entity.waybill;

import lombok.Getter;

@Getter
public enum WaybillStatus {
    WAITING(1),
    SHIPPING(2),
    DELIVERED(3),
    CANCELLED(4);
    ;

    private final int value;
    WaybillStatus(int value) {
        this.value = value;
    }

}
