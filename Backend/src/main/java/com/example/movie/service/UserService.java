package com.example.movie.service;
import com.example.movie.model.User;

import java.util.Optional;

public interface UserService {
    void saveUser(User user);

    void createUser(User user);

    User findByUserEmail(String email);
    void updateUser(User user);
    void deleteUser(User user);
}


