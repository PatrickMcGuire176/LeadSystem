package com.mcguire.leadsystem.dao;

import com.mcguire.leadsystem.model.Contact;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository("test")
public class ContactDataAccessService implements ContactDao {
    @Override
    public int insertContact(UUID id, Contact contact) {
        return 0;
    }

    @Override
    public int insertContact(Contact contact) {
        return ContactDao.super.insertContact(contact);
    }

    @Override
    public List<Contact> selectAllContacts() {
        return List.of(new Contact(UUID.randomUUID(), "FROM POSTGRES DB"));
    }

    @Override
    public Optional<Contact> selectContactById(UUID id) {
        return Optional.empty();
    }

    @Override
    public int deleteContactById(UUID id) {
        return 0;
    }

    @Override
    public int updateContactById(UUID id, Contact contact) {
        return 0;
    }
}
