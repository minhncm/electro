package com.ncm.electro.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class DuplicatedWishException extends RuntimeException{
    public DuplicatedWishException(Object value) {
        super(String.format("Duplicated with product ID: '%s'", value));
    }
}
