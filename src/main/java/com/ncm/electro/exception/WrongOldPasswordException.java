package com.ncm.electro.exception;

public class WrongOldPassword extends RuntimeException{
    public WrongOldPassword() {
        super("Wrong old password");
    }
}
