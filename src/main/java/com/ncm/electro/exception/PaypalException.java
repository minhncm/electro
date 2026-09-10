package com.ncm.electro.exception;

public class PaypalException extends RuntimeException{
    public PaypalException(String message) {
        super(message);
    }
}
