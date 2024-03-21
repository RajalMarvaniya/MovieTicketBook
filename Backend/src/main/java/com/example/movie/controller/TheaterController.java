package com.example.movie.controller;

import com.example.movie.model.Theater;
import com.example.movie.repository.TheaterRepository;
import com.example.movie.service.TheaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class TheaterController {

    @Autowired
    private TheaterService theaterService;
    private TheaterRepository theaterRepository;
    // Get all theaters
    @GetMapping("/theaters")
    public ResponseEntity<List<Theater>> getAllTheaters() {
        List<Theater> theaters = theaterService.getAllTheaters();
        return new ResponseEntity<>(theaters, HttpStatus.OK);
    }

    // Get theater by ID
    @GetMapping("/theaters/{id}")
    public ResponseEntity<Theater> getTheaterById(@PathVariable("id") Long id) {
        Theater theater = theaterService.getTheaterById(id);
        if (theater != null) {
            return new ResponseEntity<>(theater, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Create a new theater
    @PostMapping("/addTheater")
    public ResponseEntity<?> createTheater(@RequestBody Theater theater) {
        // Check if theater with the same name and location already exists
        if (theaterService.theaterExists(theater.getName(), theater.getLocation())) {
            return new ResponseEntity<>("Theater already exists.", HttpStatus.BAD_REQUEST);
        }

        Theater createdTheater = theaterService.createTheater(theater);
        return new ResponseEntity<>(createdTheater, HttpStatus.CREATED);
    }

    // Update a theater
    @PutMapping("/theaters/{id}")
    public ResponseEntity<Theater> updateTheater(@PathVariable("id") Long id, @RequestBody Theater theaterData) {
        Theater updatedTheater = theaterService.updateTheater(id, theaterData);
        if (updatedTheater != null) {
            return new ResponseEntity<>(updatedTheater, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete a theater
    @DeleteMapping("/theaters/{id}")
    public ResponseEntity<Void> deleteTheater(@PathVariable("id") Long id) {
        theaterService.deleteTheater(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Controller method to fetch all theater IDs
//    @GetMapping("/theaterIds")
//    public ResponseEntity<List<Long>> getAllTheaterIds() {
//        List<Long> theaterIds = theaterService.getAllTheaterIds();
//        return ResponseEntity.ok().body(theaterIds);
//    }



}
