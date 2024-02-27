package com.example.movie.repository;
import com.example.movie.model.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TheaterRepository extends JpaRepository<Theater, Long> {

    Theater findByName(String name);

    boolean existsByNameAndLocation(String name, String location);
}
