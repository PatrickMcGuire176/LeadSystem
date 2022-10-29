package com.mcguire.leadsystem.api;

import com.mcguire.leadsystem.model.Contact;
import com.mcguire.leadsystem.model.User;
import com.mcguire.leadsystem.service.ContactService;
import com.mcguire.leadsystem.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/user")
@CrossOrigin
public class UserController {
    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @CrossOrigin(origins = "http://localhost:3000", exposedHeaders = {"Access-Control-Allow-Origin"})
    @GetMapping(path="login/{email}")
    public String getUserByEmail(@PathVariable("email") String email){
        return userService.getUserByEmail(email)
                .orElse(null);
    }

}