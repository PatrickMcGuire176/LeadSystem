package com.mcguire.leadsystem.repository;

import com.mcguire.leadsystem.model.Contact;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ContactRepository extends JpaRepository<Contact, Long> {
    @Query("select c from Contact c " +
            "where lower(c.firstName) like lower(concat('%', :searchTerm, '%')) " +
            "or lower(c.lastName) like lower(concat('%', :searchTerm, '%'))")
    List<Contact> search(@Param("searchTerm") String searchTerm);

    @Query(value="SELECT email FROM Contact c where c.email = :email", nativeQuery = true)
    String getContactByEmail(@Param("email") String email);

    @Query(value="SELECT id FROM Contact c where c.email = :email", nativeQuery = true)
    Long getContactIdByEmail(@Param("email") String email);

}