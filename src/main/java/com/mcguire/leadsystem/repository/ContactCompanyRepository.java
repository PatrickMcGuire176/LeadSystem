package com.mcguire.leadsystem.repository;

import com.mcguire.leadsystem.model.ContactCompany;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContactCompanyRepository extends JpaRepository<ContactCompany, Long> {

    @Query(value="select company_id, contact_id from contactcompany", nativeQuery = true)
    List<ContactCompany> getAllContactsNew();

}