package com.mcguire.leadsystem.service;

import com.mcguire.leadsystem.dao.ContactDao;
import com.mcguire.leadsystem.customexceptions.ContactNotFound;
import com.mcguire.leadsystem.model.Contact;
import com.mcguire.leadsystem.model.ContactCompany;
import com.mcguire.leadsystem.repository.ContactCompanyRepository;
import com.mcguire.leadsystem.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    ContactNotFound myException;
    @Autowired
    ContactRepository contactRepository;

    @Autowired
    ContactCompanyRepository contactCompanyRepository;
    @Autowired
    ContactDao contactDao;

    @Autowired
    public ContactService(@Qualifier("test") ContactDao contactDao) {
        this.contactDao = contactDao;
    }

    public ResponseEntity<String> addContact(Contact contact){
        Optional<String> temp = getContactByEmail(contact.getEmail());
        if (temp.isEmpty()){
            contactRepository.save(contact);
        } else if (!temp.isEmpty()){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Contact already exists");
        }
        return ResponseEntity.ok()
                .body("Contact added");
    }

    public List<ContactCompany> getAllContacts(){
        return contactCompanyRepository.findAll();
    }

    public Optional<Contact> getContactByID(Long id){
        return Optional.of(contactRepository.findById(id).get());
    }

    public Optional<String> getContactByEmail(String email){
        return Optional.ofNullable(contactRepository.getContactByEmail(email));
    }

    public Long getContactIdByEmail(String email){
        return contactRepository.getContactIdByEmail(email);
    }

    public int deleteContact(Long id){
        return contactDao.deleteContactById(id);
    }

    public int updateContact(Long id, Contact newContact){
        return contactDao.updateContactById(id, newContact);
    }

}
