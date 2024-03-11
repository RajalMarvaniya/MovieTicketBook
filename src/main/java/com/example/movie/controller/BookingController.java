package com.example.movie.controller;

import java.util.List;

import com.example.movie.model.Booking;
import com.example.movie.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.movie.model.Movie;
import com.example.movie.service.MovieService;

@RestController
@CrossOrigin("*")
public class BookingController {

    @Autowired
    private MovieService movieService;
    @Autowired
    private BookingService bookingService;
    @GetMapping("/moviesbyid/{theaterId}")
    public List<Movie> getMoviesByTheaterId(@PathVariable Long theaterId) {
        return movieService.getMoviesByTheaterId(theaterId);
    }


    @PostMapping("/bookings")
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.addBooking(booking);
    }
}

