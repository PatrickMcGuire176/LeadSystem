package com.mcguire.leadsystem.model;

import org.hibernate.annotations.Formula;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "company")
public class Company extends AbstractEntity implements Serializable  {

    private static final long serialVersionUID = 1L;

    @NotBlank
    @Column(name = "name")
    private String name;


    @Formula("(select count(*) from contact)")
    private int employeeCount;


    public Company(String name) {
        this.name = name;
    }

    public Company() {

    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public int getEmployeeCount(){
        return employeeCount;
    }
}
