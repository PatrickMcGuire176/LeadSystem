package com.mcguire.leadsystem.service;

import com.mcguire.leadsystem.model.Company;
import com.mcguire.leadsystem.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class CompanyService {
    @Autowired
    CompanyRepository companyRepository;

    public void addCompany(Company company){
        Optional<String> temp = getCompanyByName(company.getName());
        if (temp.isEmpty()){
            companyRepository.save(company);
        } else if (!temp.isEmpty()){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Company already exists");
        }
        companyRepository.save(company);
    }
    public Optional<String> getCompanyByName(String companyName){
        return Optional.ofNullable(companyRepository.findCompanyByEmail(companyName));
    }
}
