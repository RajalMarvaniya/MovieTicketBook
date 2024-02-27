package com.example.movie.service;
import java.util.List;
import java.util.Optional;

import com.example.movie.model.Theater;
import com.example.movie.repository.TheaterRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TheaterService {

    @Autowired
    private TheaterRepository theaterRepository;

    public List<Theater> getAllTheaters() {
        return theaterRepository.findAll();
    }

    public Theater getTheaterById(Long theaterId) {
        return theaterRepository.findById(theaterId).orElse(null);
    }

    public Theater createTheater(Theater theater) {
        return theaterRepository.save(theater);
    }

    public void deleteTheater(Long theaterId) {
        theaterRepository.deleteById(theaterId);
    }


    public boolean theaterExists(String name, String location) {
        return theaterRepository.existsByNameAndLocation(name, location);
    }

    public Theater updateTheater(Long id, Theater theaterData) {
        // Step 1: Retrieve the existing theater entity from the database
        Optional<Theater> optionalTheater = theaterRepository.findById(id);

        // Step 2: Check if the theater exists in the database
        if (optionalTheater.isPresent()) {
            // Theater exists, retrieve it
            Theater existingTheater = optionalTheater.get();

            // Update the properties with the data from theaterData
            existingTheater.setName(theaterData.getName());
            existingTheater.setLocation(theaterData.getLocation());

            // Step 3: Save the updated theater entity back to the database
            return theaterRepository.save(existingTheater);
        } else {
            // Theater with the given id not found
            throw new EntityNotFoundException("Theater not found with id: " + id);
        }
    }

}
