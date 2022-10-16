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

    @NotBlank
    @Column(name = "company_id")
    private int company_id;

    @Formula("(select count(*) from contact)")
    private int employeeCount;


    public Company(String name, int company_id) {
        System.out.println("Initializing full constructor in company model");
        this.name = name;
        this.company_id = company_id;
    }

    public Company() {
        System.out.println("Initializing default construct in company model");
    }

    public int getCompany_id() {
        System.out.println("Getting company ID");
        return company_id;
    }

    public void setCompany_id(int company_id) {
        this.company_id = company_id;
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
