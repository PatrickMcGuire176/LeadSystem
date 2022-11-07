package com.mcguire.leadsystem.api;

import com.mcguire.leadsystem.customexceptions.ContactNotFound;
import com.mcguire.leadsystem.model.Contact;
import com.mcguire.leadsystem.model.ContactCompany;
import com.mcguire.leadsystem.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/v1/contact")
//@CrossOrigin(origins = "*")

public class ContactController {
    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping(path = "addContact")
    public ResponseEntity<String> addContact(@NonNull @RequestBody Contact contact) {
        try {
            contactService.addContact(contact);
        } catch (ResponseStatusException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Contact already exists");
        }
        return ResponseEntity.ok().body("Contact added");
    }

    @GetMapping(path = "getAllContacts")
    public List<ContactCompany> getAllContacts() {
        return contactService.getAllContacts();
    }

    @GetMapping(path = "{id}")
    public Contact getContactById(@PathVariable("id") Long id) {
        return contactService.getContactByID(id)
                .stream().findFirst()
                .orElse(null);
    }

    @GetMapping(path = "/getContact/{email}")
    public String getContactByEmail(@PathVariable("email") String email) {
        try {
            return contactService.getContactByEmail(email).orElse(null);
        } catch (NullPointerException e) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Contact Not Found");
        }
    }


    @DeleteMapping(path = "{id}")
    public void deleteContactById(@PathVariable("id") Long id) {
        contactService.deleteContact(id);
    }

    @PutMapping(path = "{id}")
    public void updateContact(@PathVariable("id") Long id, @NonNull @RequestBody Contact contactToUpdate) {
        contactService.updateContact(id, contactToUpdate);
    }
}