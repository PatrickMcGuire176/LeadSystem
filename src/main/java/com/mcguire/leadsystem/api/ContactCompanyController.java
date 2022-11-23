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
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.Map;

@RestController
@RequestMapping("api/v1/contactCompany")
@CrossOrigin(exposedHeaders = "Company, Contact")
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
        StringBuilder sb = new StringBuilder("");

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

        //Try to add contact
        try {
            sb.append(contactService.addContact(contact).getBody() + " ");
            contactCompany.setContactId(contact.getId());
            responseHeaders.add("Contact", "Added");
        } catch (ResponseStatusException e){
            contactCompany.setContactId(contactService.getContactIdByEmail(contact.getEmail()));
            sb.append(e.getMessage() + " ");
            responseHeaders.add("Contact", "Not Added");
        }

        //Try to add company
        try {
            sb.append(companyService.addCompany(company).getBody()  + " ");
            contactCompany.setCompanyId(company.getId());
            responseHeaders.add("Company", "Added");
        } catch (ResponseStatusException e){
            contactCompany.setCompanyId(companyService.getCompanyIdByName(company.getName()));
            sb.append(e.getMessage() + " ");
            responseHeaders.add("Company", "Not Added");
        }

        contactCompany.setStatus(true);
        crmService.addContactCompany(contactCompany);

        System.out.println("Added company ID Is " + company.getId());
        responseHeaders.add("Access-Control-Allow-Headers",  "Company, Contact");
        return ResponseEntity.ok()
                .headers(responseHeaders)
                .body(sb.toString());

    }
}
