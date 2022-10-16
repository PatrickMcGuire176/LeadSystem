package com.mcguire.leadsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

/**
 * The contact company data model.  This is a java object
 * representation of the contactcompany mysql xref table
 */

@Entity
@Table(name = "contactcompany")
public class ContactCompany extends AbstractEntity {
    //ContactCompany Fields

    @NotEmpty
    @Column(name="status")
    private Boolean status;
    @NotNull
    @ManyToOne
    @JoinColumn(name="company_id", referencedColumnName="id")
    private Company company;

    @NotNull
    @ManyToOne
    @JoinColumn(name="contact_id", referencedColumnName="id")
    private Contact contact;


    public ContactCompany() {
    }

    public ContactCompany(Company company, Contact contact) {
        this.company = company;
        this.contact = contact;
    }

    public Contact getContact() {
        return contact;
    }

    public void setContact(Contact contact) {
        this.contact = contact;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Boolean getStatus() {
        return status;
    }
    public void setStatus(Boolean status) {
        this.status = status;
    }
}