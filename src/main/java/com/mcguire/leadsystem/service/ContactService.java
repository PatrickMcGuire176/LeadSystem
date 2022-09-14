package com.mcguire.leadsystem.service;

import com.mcguire.leadsystem.dao.ContactDao;
import com.mcguire.leadsystem.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Component
public class ContactService {

    private final ContactDao contactDao;

    @Autowired
    public ContactService(@Qualifier("test") ContactDao contactDao) {
        this.contactDao = contactDao;
    }

    public int addContact(Contact contact){
        return contactDao.insertContact(contact);
    }

    public List<Contact> getAllContacts(){
        return contactDao.selectAllContacts();
    }

    public Optional<Contact> getContactByID(Long id){
        return contactDao.selectContactById(id);
    }

    public int deleteContact(Long id){
        return contactDao.deleteContactById(id);
    }

    public int updateContact(Long id, Contact newContact){
        return contactDao.updateContactById(id, newContact);
    }

}
