package com.mcguire.leadsystem.service;

import com.mcguire.leadsystem.model.ContactCompany;
import com.mcguire.leadsystem.repository.ContactCompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CrmService {

    private final ContactCompanyRepository contactCompanyRepository;

    public CrmService(ContactCompanyRepository contactCompanyRepository){
        this.contactCompanyRepository = contactCompanyRepository;
    }

    public int addContactCompany(ContactCompany contactCompany){
        return 1;
    }
}
