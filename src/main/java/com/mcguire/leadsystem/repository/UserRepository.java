package com.mcguire.leadsystem.repository;

import com.mcguire.leadsystem.model.Contact;

import java.util.List;
import java.util.UUID;

import com.mcguire.leadsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query("SELECT password FROM User u where u.email =:email")
    String findPasswordByEmail(@Param("email") String email);

}