import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const ShowMovies = () => {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate hook
    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = () => {
        axios.get('http://localhost:8080/movies')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/${id}`)
            .then(() => {
                // Update the movies list after successful deletion
                fetchMovies();
            })
            .catch(error => {
                console.error('Error deleting movie:', error);
            });
    };

    const handleEditMovie = (movie) => {
        navigate('/updatemovie', { state: { movie: movie } });
    };

    return (
        <>
            <Navbar />
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Movie Id</th>
                            <th>Movie Name</th>
                            <th>Description</th>
                            <th>Theater ID</th>
                            <th>Release Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td>{movie.description}</td>
                            <td>{movie.theater ? movie.theater.id : 'N/A'}</td>
                            <td>{movie.releaseDate}</td>
                            <td>
                                <button className="delete-button button" onClick={() => handleDelete(movie.id)}>Delete</button>
                                <button className="edit-button button" onClick={() => handleEditMovie(movie)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

                </table>
            </main>
        </>
    );
}

export default ShowMovies;
