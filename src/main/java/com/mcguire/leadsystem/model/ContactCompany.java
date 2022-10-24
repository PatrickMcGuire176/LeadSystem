package com.mcguire.leadsystem.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * The contact company data model.  This is a java object
 * representation of the contactcompany mysql xref table
 */

@Entity
@Table(name = "contactcompany")
public class ContactCompany extends AbstractEntity {
    //ContactCompany Fields
    @Column(name="status")
    private Boolean status;

    @Column(name="company_id")
    private Long companyId;

    @Column(name="contact_id")
    private Long contactId;

    @NotNull
    @ManyToOne
    @JoinColumn(name="company_id", referencedColumnName="id", insertable=false, updatable=false)
    private Company company;

    @NotNull
    @ManyToOne
    @JoinColumn(name="contact_id", referencedColumnName="id", insertable=false, updatable=false)
    private Contact contact;

    public ContactCompany() {
    }

    public ContactCompany(Company company, Contact contact) {
        this.company = company;
        this.contact = contact;
    }
    public ContactCompany(Boolean status, Long companyId, Long contactId) {
        this.status = status;
        this.companyId = companyId;
        this.contactId = contactId;
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
    public Long getCompanyId() {
        return companyId;
    }

    public void setCompanyId(Long companyId) {
        this.companyId = companyId;
    }

    public Long getContactId() {
        return contactId;
    }

    public void setContactId(Long contactId) {
        this.contactId = contactId;
    }
}

