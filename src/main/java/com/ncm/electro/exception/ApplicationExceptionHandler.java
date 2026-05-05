package com.ncm.electro.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

import java.time.Instant;

@RestControllerAdvice
public class ApplicationExceptionHandler {

    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException.class)
    public ErrorMessage resourceNotfoundExceptionHandler(ResourceNotFoundException ex, WebRequest request) {
        return new ErrorMessage(
                HttpStatus.NOT_FOUND.value(),
                Instant.now(),
                ex.getMessage(),
                request.getDescription(false)
        );
    }

    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    @ExceptionHandler(InsufficientInventoryException.class)
    public ErrorMessage insufficientInventoryExceptionHandler(InsufficientInventoryException ex, WebRequest request) {
        return new ErrorMessage(
                HttpStatus.UNPROCESSABLE_ENTITY.value(),
                Instant.now(),
                ex.getMessage(),
                request.getDescription(false)
        );
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(DuplicatedWishException.class)
    public ErrorMessage duplicateWishExceptionHandler(DuplicatedWishException ex, WebRequest request) {
        return new ErrorMessage(
                HttpStatus.CONFLICT.value(),
                Instant.now(),
                ex.getMessage(),
                request.getDescription(false)
        );
    }

    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    @ExceptionHandler(WrongOldPasswordException.class)
    public ErrorMessage wrongOldPasswordExceptionHandler(WrongOldPasswordException ex, WebRequest request) {
        return new ErrorMessage(
                HttpStatus.UNAUTHORIZED.value(),
                Instant.now(),
                ex.getMessage(),
                request.getDescription(false)
        );
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(InvalidPasswordException.class)
    public ErrorMessage wrongOldPasswordExceptionHandler(InvalidPasswordException ex, WebRequest request) {
        return new ErrorMessage(
                HttpStatus.BAD_REQUEST.value(),
                Instant.now(),
                ex.getMessage(),
                request.getDescription(false)
        );
    }

}
