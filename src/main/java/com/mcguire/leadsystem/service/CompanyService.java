package com.mcguire.leadsystem.service;

import com.mcguire.leadsystem.model.Company;
import com.mcguire.leadsystem.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class CompanyService {
    @Autowired
    CompanyRepository companyRepository;

    public ResponseEntity<String> addCompany(Company company){
        Optional<String> temp = getCompanyByName(company.getName());
        if (temp.isEmpty()){
            companyRepository.save(company);
        } else if (!temp.isEmpty()){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Company already exists");
        }
        companyRepository.save(company);
        return ResponseEntity
                .ok()
                .body("Company Added");
    }
    public Optional<String> getCompanyByName(String companyName){
        return Optional.ofNullable(companyRepository.findCompanyByEmail(companyName));
    }

    public Long getCompanyIdByName(String companyName){
        return companyRepository.findCompanyIdByName(companyName);
    }
}
