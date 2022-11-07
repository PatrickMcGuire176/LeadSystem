package com.mcguire.leadsystem.api;

import com.mcguire.leadsystem.customexceptions.ContactNotFound;
import com.mcguire.leadsystem.model.Company;
import com.mcguire.leadsystem.model.Contact;
import com.mcguire.leadsystem.model.ContactCompany;
import com.mcguire.leadsystem.service.CompanyService;
import com.mcguire.leadsystem.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/v1/company")
//@CrossOrigin(origins = "*")

public class CompanyController {

    @Autowired
    private final CompanyService companyService;

    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @PostMapping(path = "addCompany")
    public ResponseEntity<String> addCompany(@NonNull @RequestBody Company company) {
        try {
            companyService.addCompany(company);
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Company already exists");
        }
        return ResponseEntity.ok().body("Company added");
    }
    @GetMapping(path = "getCompanyByName/{companyName}")
    public String getCompanyByName(@PathVariable("companyName") String companyName) {
        try {
            return companyService.getCompanyByName(companyName).orElse(null);
        } catch (NullPointerException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Company Not Found");
        }
    }

}