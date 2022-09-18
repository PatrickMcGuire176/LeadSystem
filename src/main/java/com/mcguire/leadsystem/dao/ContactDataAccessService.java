package com.mcguire.leadsystem.dao;

import com.mcguire.leadsystem.model.Contact;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Random;
import java.util.UUID;

@Repository("test")
public class ContactDataAccessService implements ContactDao {
    @Override
    public int insertContact(Long id, Contact contact) {
        return 0;
    }

    @Override
    public int insertContact(Contact contact) {
        return ContactDao.super.insertContact(contact);
    }

    @Override
    public List<Contact> selectAllContacts() {
        return List.of(new Contact()
                //new Random().nextLong()
                //, "FROM POSTGRES DB")
        );
    }

    @Override
    public Optional<Contact> selectContactById(Long id) {
        return Optional.empty();
    }

    @Override
    public int deleteContactById(Long id) {
        return 0;
    }

    @Override
    public int updateContactById(Long id, Contact contact) {
        return 0;
    }
}
