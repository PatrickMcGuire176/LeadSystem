package com.mcguire.leadsystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
public class Status extends AbstractEntity {

    @Id
    @NotBlank
    @Column(name = "statusid")
    private Long id;

    @Column(name = "name")
    private String name;

    public Status() {

    }


    public Status(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

}