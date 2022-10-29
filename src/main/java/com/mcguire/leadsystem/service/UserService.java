package com.mcguire.leadsystem.service;

import com.mcguire.leadsystem.dao.ContactDao;
import com.mcguire.leadsystem.model.Contact;
import com.mcguire.leadsystem.model.User;
import com.mcguire.leadsystem.repository.ContactRepository;
import com.mcguire.leadsystem.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    public Optional<String> getUserByEmail(String email){
        return Optional.of(userRepository.findPasswordByEmail(email));
    }
}
