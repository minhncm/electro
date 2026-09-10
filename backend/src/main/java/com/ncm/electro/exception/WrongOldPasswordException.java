package com.ncm.electro.exception;

public class WrongOldPasswordException extends RuntimeException{
    public WrongOldPasswordException() {
        super("Wrong old password");
    }
}
