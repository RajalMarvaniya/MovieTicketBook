package com.example.movie.repository;

import com.example.movie.model.Movie;
import com.example.movie.model.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findByTheater(Theater theater);

}
