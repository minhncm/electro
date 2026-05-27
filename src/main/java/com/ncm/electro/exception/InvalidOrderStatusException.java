package com.ncm.electro.exception;

public class InvalidOrderStatusException extends RuntimeException{
    public InvalidOrderStatusException(Integer status) {
        super("Cannot create waybill for order status: " + status);
    }
}
