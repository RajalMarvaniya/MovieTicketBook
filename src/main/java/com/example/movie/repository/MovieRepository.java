package com.example.movie.repository;
import java.util.List;

import com.example.movie.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    List<Movie> findByTitleContainingIgnoreCase(String keyword);

    <Theatre> List<Movie> findByTheatre(Theatre t);

}
