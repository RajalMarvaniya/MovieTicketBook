package com.example.movie.controller;

import com.example.movie.model.Movie;
import com.example.movie.model.Theater;
import com.example.movie.repository.MovieRepository;
import com.example.movie.repository.TheaterRepository;
import com.example.movie.service.MovieService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
 // Set base path for movie-related endpoints
public class MovieController {

    private final MovieService movieService;
    private final TheaterRepository theaterRepository;
    private final MovieRepository movieRepository;

    @Autowired
    public MovieController(MovieService movieService, TheaterRepository theaterRepository, MovieRepository movieRepository) {
        this.movieService = movieService;
        this.theaterRepository = theaterRepository;
        this.movieRepository = movieRepository;
    }

    @GetMapping("/movies")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    @GetMapping("/movies/{id}")
    public Movie getMovieById(@PathVariable Long id) {
        return movieService.getMovieById(id);
    }

//    @PostMapping("/addmovie")
//    public void addMovie(@RequestBody Movie movie) {
//        movieService.saveMovie(movie);
//    }

//    @PostMapping("/addmovie")
//    public ResponseEntity<String> addMovie(@RequestBody Movie movie) {
//        try {
//            movieService.saveMovie(movie);
//            return ResponseEntity.status(HttpStatus.CREATED).body("Movie added successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add movie: " + e.getMessage());
//        }
//    }

    @PostMapping("/addmovie")
    public ResponseEntity<String> addMovie(@RequestBody Movie movie) {
        try {
            // Retrieve the theater ID from the theater object
            Long theaterId = movie.getTheater().getId(); // Assuming getId() returns the theater ID in Theater class

            // Retrieve the theater using the theater ID
            Theater theater = theaterRepository.findById(theaterId).orElse(null);
            if (theater == null) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Theater not found for provided ID: " + theaterId);
            }

            // Associate the retrieved theater with the movie
            movie.setTheater(theater);

            // Save the movie
            movieRepository.save(movie);

            return ResponseEntity.status(HttpStatus.CREATED).body("Movie added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to add movie: " + e.getMessage());
        }
    }


    @DeleteMapping("/movies/{id}")
    public ResponseEntity<String> deleteMovie(@PathVariable Long id) {
        try {
            movieRepository.deleteById(id);
            return ResponseEntity.status(HttpStatus.OK).body("Movie deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to delete movie: " + e.getMessage());
        }
    }

    @PutMapping("/movies/{id}")
    public ResponseEntity<String> updateMovie(@PathVariable Long id, @RequestBody Movie updatedMovie) {
        try {
            // Retrieve the existing movie from the database
            Movie existingMovie = movieRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException("Movie not found with id: " + id));

            // Update the attributes of the existing movie with the attributes of the updated movie
            existingMovie.setTitle(updatedMovie.getTitle());
            existingMovie.setDescription(updatedMovie.getDescription());
            existingMovie.setTheater(updatedMovie.getTheater());
            existingMovie.setReleaseDate(updatedMovie.getReleaseDate());

            // Save the updated movie
            movieRepository.save(existingMovie);

            return ResponseEntity.ok("Movie updated successfully");
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Failed to update movie: " + e.getMessage());
        }
    }

        @GetMapping("/theater/{id}")
        public List<Movie> getMoviesByTheaterId (@PathVariable Long id){
            return movieService.getMovieByTheatreId(id);
        }
    }
