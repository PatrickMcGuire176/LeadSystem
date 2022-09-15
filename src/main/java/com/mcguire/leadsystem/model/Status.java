package com.mcguire.leadsystem.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
public class Status extends AbstractEntity {

    @NotNull
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