package com.mcguire.leadsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.UUID;

/**
 * The contact data model which stores data about the contact
 */

@Entity
@Table(name = "Contact")
public class Contact extends AbstractEntity {
    //Contact fields
    //Having an ID in the contact entity was causing the delete contact to not work
//    @NotNull
//    @Id
//    @Column(name = "id")
//    private Long id;

    @NotBlank
    @Column(name = "firstname")
    private String firstName = "";
    @NotBlank
    @Column(name = "lastname")
    private String lastName = "";
    @ManyToOne
    @JoinColumn(name = "companyid")
    @NotNull
    @JsonIgnoreProperties({"employees"})
    private Company company;
    @Email
    @NotBlank
    @Column(name = "email")
    private String email = "";
    @NotNull
    @ManyToOne
    @JoinColumn(name = "statusid")
    private Status status;

    //Default Constructor
    public Contact() {
        System.out.println("Hit in Contact Constructor: Contact");
    }

    @Override
    public String toString() {
        return firstName + " " + lastName;
    }


    public String getFirstName() {
        return firstName;
    }


    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}