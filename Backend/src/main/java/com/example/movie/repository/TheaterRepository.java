package com.example.movie.repository;

import com.example.movie.model.Theater;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TheaterRepository extends JpaRepository<Theater, Long> {

    Theater findByName(String name);

    boolean existsByNameAndLocation(String name, String location);

//    @Query("SELECT t.id FROM Theater t")
//    List<Long> findAllIds();

}
