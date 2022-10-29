package com.mcguire.leadsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="user")
public class User extends AbstractEntity{
    @NotBlank
    @Column(name = "name")
    private String name = "";

    @Email
    @NotBlank
    @Column(name = "email")
    private String email = "";
    @NotBlank
    @Column(name = "password")
    private String password = "";
    public String getName() {
        return name;
    }

    //Default Constructor
    public User() {

    }

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
