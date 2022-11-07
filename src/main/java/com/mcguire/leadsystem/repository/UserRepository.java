package com.mcguire.leadsystem.repository;

import com.mcguire.leadsystem.model.Contact;

import java.util.List;
import java.util.UUID;

import com.mcguire.leadsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value="SELECT password FROM user u where u.email =:email",nativeQuery = true)
    String findPasswordByEmail(@Param("email") String email);

}