package com.mcguire.leadsystem.service;

import com.mcguire.leadsystem.model.ContactCompany;
import com.mcguire.leadsystem.repository.ContactCompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CrmService {
    @Autowired
    private final ContactCompanyRepository contactCompanyRepository;

    public CrmService(ContactCompanyRepository contactCompanyRepository){
        this.contactCompanyRepository = contactCompanyRepository;
    }

    public void addContactCompany(ContactCompany contactCompany){


    }
}
