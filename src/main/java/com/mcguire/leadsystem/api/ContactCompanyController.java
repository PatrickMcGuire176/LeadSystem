package com.mcguire.leadsystem.api;


import com.mcguire.leadsystem.service.CompanyService;
import com.mcguire.leadsystem.service.ContactService;
import com.mcguire.leadsystem.service.CrmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("api/v1/contactCompany")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactCompanyController {
    private final CrmService crmService;

    private final ContactService contactService;
    private final CompanyService companyService;

    @Autowired
    public ContactCompanyController(CrmService crmService, ContactService contactService, CompanyService companyService) {
        this.crmService = crmService;
        this.contactService = contactService;
        this.companyService = companyService;
    }

    @PostMapping("addContactCompany")
    public int addContactCompany(){
        //crmService.add
        return 1;
    }
}
