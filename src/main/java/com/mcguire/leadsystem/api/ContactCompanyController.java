package com.mcguire.leadsystem.api;


import com.mcguire.leadsystem.model.Company;
import com.mcguire.leadsystem.model.Contact;
import com.mcguire.leadsystem.model.ContactCompany;
import com.mcguire.leadsystem.service.CompanyService;
import com.mcguire.leadsystem.service.ContactService;
import com.mcguire.leadsystem.service.CrmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.util.Map;

@Controller
@RequestMapping("api/v1/contactCompany")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactCompanyController {
    @Autowired
    private final CrmService crmService;
    @Autowired
    private final ContactService contactService;
    @Autowired
    private final CompanyService companyService;

    @Autowired
    public ContactCompanyController(CrmService crmService, ContactService contactService, CompanyService companyService) {
        this.crmService = crmService;
        this.contactService = contactService;
        this.companyService = companyService;
    }

    @PostMapping(value = "/addContactCompany")
    public ResponseEntity addContactCompany(@RequestBody Map<String, String> input) {
        HttpHeaders responseHeaders = new HttpHeaders();
        Contact contact = new Contact();
        Company company = new Company();
        ContactCompany contactCompany = new ContactCompany();
        input.forEach((k, v) -> {
                switch (k) {
                    case "firstName":
                        contact.setFirstName(v);
                        break;
                    case "lastName":
                        contact.setLastName(v);
                        break;
                    case "email":
                        contact.setEmail(v);
                        break;
                    case "companyName":
                        company.setName(v);
                        break;
                    default:
                        System.out.println("Parameter was not found");
                }}
        );
        System.out.println(contact.getFirstName());
        System.out.println(contact.getLastName());
        System.out.println(contact.getEmail());
        System.out.println(company.getName());

        try {
            contactService.addContact(contact);
            responseHeaders.add("Contact", "Added");
        } catch (Exception e){
            responseHeaders.add("Contact", "Not Added");
        }

        try {
            companyService.addCompany(company);
            responseHeaders.add("Company", "Added");
        } catch (Exception e){
            responseHeaders.add("Company", "Not Added");
        }

        System.out.println("Added company ID Is " + company.getId());
        return ResponseEntity.ok()
                .headers(responseHeaders)
                .body("Response with header using ResponseEntity");

    }
}
