package com.example.movie.controller;

import com.example.movie.model.User;
import com.example.movie.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class LoginController {

    @Autowired
    private final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public  User Login(@RequestBody User user) {
        // Find user by username
        String email = user.getEmail();
        System.out.println(email);
        User s1 = userService.findByUserEmail(email);

        if (s1.getPassword().equals(user.getPassword())) {
            return s1;

        } else
            return null;


    }
}