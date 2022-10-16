package com.mcguire.leadsystem.api;

import com.mcguire.leadsystem.customexceptions.ContactNotFound;
import com.mcguire.leadsystem.model.Company;
import com.mcguire.leadsystem.model.Contact;
import com.mcguire.leadsystem.model.ContactCompany;
import com.mcguire.leadsystem.service.CompanyService;
import com.mcguire.leadsystem.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/v1/company")
@CrossOrigin(origins = "http://localhost:3000")

public class CompanyController {

    @Autowired
    private final CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @PostMapping(path = "addCompany")
    public void addCompany(@NonNull @RequestBody Company company) {
        //Check if company already exists
        try {
            String temp = getCompanyByName(company.getName());
            if(!temp.isEmpty()) {
                throw new ResponseStatusException(HttpStatus.CONFLICT, "Company already exists");
            }
        } catch (NullPointerException e) {
            companyService.addCompany(company);
        }
    }
    @GetMapping(path = "getCompanyByName/{companyName}")
    public String getCompanyByName(@PathVariable("companyName") String companyName) {
        try {
            String s1 = companyService.getCompanyByName(companyName);
            System.out.println("Something here is " + s1);
            return s1;
        } catch (NullPointerException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Company Not Found");
        }
    }

}