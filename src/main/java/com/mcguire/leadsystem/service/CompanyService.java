package com.mcguire.leadsystem.service;

import com.mcguire.leadsystem.model.Company;
import com.mcguire.leadsystem.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CompanyService {
    @Autowired
    CompanyRepository companyRepository;

    public void addCompany(Company company){
        companyRepository.save(company);
    }
    public String getCompanyByName(String companyName){
        return companyRepository.findCompanyByEmail(companyName);
    }
}
