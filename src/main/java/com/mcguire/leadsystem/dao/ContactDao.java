package com.mcguire.leadsystem.dao;

import com.mcguire.leadsystem.model.Contact;


import java.util.List;
import java.util.Optional;
import java.util.Random;
public interface ContactDao {
    int insertContact(Long id, Contact contact);
    default int insertContact(Contact contact){
        Long id = new Random().nextLong();
        return this.insertContact(id, contact);
    }
    List<Contact> selectAllContacts();
    Optional<Contact> selectContactById(Long id);
    int deleteContactById(Long id);
    int updateContactById(Long id, Contact contact);
}
