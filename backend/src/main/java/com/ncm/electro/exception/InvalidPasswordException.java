package com.ncm.electro.exception;

public class InvalidPasswordException extends RuntimeException{
    public InvalidPasswordException() {
        super("Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character");
    }
}
