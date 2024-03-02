package com.example.movie.service;
import java.util.List;

import com.example.movie.model.Movie;
import com.example.movie.model.Theater;
import com.example.movie.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MovieService {

    private MovieRepository movieRepository;
    @Autowired
    private TheaterService theatreService;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Movie getMovieById(Long id) {
        return movieRepository.findById(id).orElse(null);
    }

//	    public List<Movie> searchMoviesByTitle(String title) {
//	        return movieRepository.findByTitleContainingIgnoreCase(title);
//	    }

    public void saveMovie(Movie movie) {
        movieRepository.save(movie);
    }

    public void deleteMovieById(Long id) {
        movieRepository.deleteById(id);
    }

    public List<Movie> getMovieByTheatreId(long id){
        Theater theater = theatreService.getTheaterById(id);
        List<Movie> movies = movieRepository.findByTheater(theater);
        return movies;
    }

}

