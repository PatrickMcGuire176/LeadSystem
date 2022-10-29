package com.mcguire.leadsystem.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

/**
 * The contact data model which stores data about the contact
 */

@Entity
@Table(name = "Contact")
public class Contact extends AbstractEntity {
    //Contact fields
    @NotBlank
    @Column(name = "first_name")
    private String firstName = "";
    @NotBlank
    @Column(name = "last_name")
    private String lastName = "";

    @Email
    @NotBlank
    @Column(name = "email")
    private String email = "";

    public Contact() {
        System.out.println("Initializing default construct in contact model");
    }
    public Contact(String firstName, String lastName, String email) {
        System.out.println("Initializing full constructor in contact model");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    //Default Constructor

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}