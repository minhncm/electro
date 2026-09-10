package com.ncm.electro.exception;

public class WaybillAlreadyExistsException extends RuntimeException{
    public WaybillAlreadyExistsException(Long orderId) {
        super("Order " + orderId + " already has a waybill");
    }
}
