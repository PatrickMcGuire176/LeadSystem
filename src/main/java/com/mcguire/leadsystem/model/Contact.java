package com.mcguire.leadsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.Columns;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.UUID;

/**
 The contact data model which stores data about the contact
 */

@Entity
public class Contact extends AbstractEntity {
    //Contact fields
    @Id
    @NotEmpty
    @Column(name = "contactid")
    private Long id;
//    private String name;
    @NotEmpty
    @Column(name = "firstname")
    private String firstName = "";
    @NotEmpty
    @Column(name = "lastname")
    private String lastName = "";
    @ManyToOne
    @JoinColumn(name = "companyid")
    @NotNull
    @JsonIgnoreProperties({"employees"})
    private Company company;
    @Email
    @NotEmpty
    @Column(name = "email")
    private String email = "";
    @NotNull
    @ManyToOne
    @JoinColumn(name = "statusid")
    private Status status;

    //Default Constructor
    public Contact() {
    }

    //Constructor to populate basic data
    public Contact(@JsonProperty("id") Long id)
                   //,@JsonProperty("name") String name)
                    {
        this.id = id;
//        this.name = name;
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

    public Long getID() {
        return id;
    }
}