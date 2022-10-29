package com.mcguire.leadsystem.customexceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ContactNotFound extends RuntimeException
{
    private static final long serialVersionUID = 1L;
    public ContactNotFound(String message, HttpStatus status){
        super(message);
    }
}