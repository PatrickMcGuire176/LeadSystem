package com.mcguire.leadsystem.repository;

import com.mcguire.leadsystem.model.Contact;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ContactRepository extends JpaRepository<Contact, Long> {

    @Query(value="SELECT email FROM contact c where c.email = :email", nativeQuery = true)
    String getContactByEmail(@Param("email") String email);

    @Query(value="SELECT id FROM contact c where c.email = :email", nativeQuery = true)
    Long getContactIdByEmail(@Param("email") String email);

}