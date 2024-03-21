package com.example.movie.service;
import com.example.movie.model.User;
import com.example.movie.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private  UserRepository userRepository;


    @Override
    public User findByUserEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }
    @Override
    public void createUser(User user) { userRepository.save(user);}
    @Override
    public void updateUser(User user) {
        userRepository.save(user);
    }
    @Override
    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
