package com.mcguire.leadsystem.model;

import org.hibernate.annotations.Formula;

import java.util.LinkedList;
import java.util.List;
import java.util.UUID;
//import javax.annotation.Nullable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Company extends AbstractEntity {
    @NotBlank
    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy = "company")
//   @Nullable
    private List<Contact> employees = new LinkedList<>();

    @Formula("(select count(*) from contact)")
    private int employeeCount;

    public int getEmployeeCount(){
        return employeeCount;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Contact> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Contact> employees) {
        this.employees = employees;
    }
}