import React, { useState, useEffect } from 'react';
import './AddMovieForm.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Movieupdate = () => {
    const routeLocation = useLocation();
    const selectedMovie = routeLocation.state.movie;
    const [title, setTitle] = useState(selectedMovie.title);
    const [description, setDescription] = useState(selectedMovie.description);
    const [theaterId, setTheaterId] = useState(selectedMovie.theater ? selectedMovie.theater.id : '');
    const [releaseDate, setReleaseDate] = useState(selectedMovie.releaseDate);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleClose = () => {
        // Implement closing logic here, e.g., hiding the Movieupdate component
    };

    const handleSubmit = async (event) => {
        //event.preventDefault();
        const updatedMovieData = {
            title: title,
            description: description,
            theater: { id: theaterId },
            releaseDate: releaseDate
        };

        try {
            const response = await axios.put(`http://localhost:8080/movies/${selectedMovie.id}`, updatedMovieData);
            if (response.status === 200) {
                console.log('Movie updated successfully!');
                navigate("/showmovie");
            } else {
                console.error('Failed to update movie.');
            }
        } catch (error) {
            console.error('Error updating movie:', error);
            setErrorMessage('Failed to update movie. Please try again later.');
        }
    };

    const handleCancel = () => {
        handleClose();
    };
    const handleUpdateClick = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        handleSubmit(); // Call handleSubmit function to perform the update operation
    };
    return (
        <div>
            <Navbar/>
            <div className="container1">
                <form onSubmit={handleSubmit} className='form1'>
                    <div>
                        <label className="addmovie">Update Movie</label>
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="movie-form">
                        <label className="movie-label" htmlFor="title">Movie Title:</label>
                        <input 
                            type="text" 
                            className="movie-input" 
                            id="title" 
                            name="title" 
                            required 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                        />
                    </div>
                    <div className="movie-form">
                        <label className="movie-label" htmlFor="description">Description:</label>
                        <input 
                            type="text" 
                            className="movie-input"  
                            id="description" 
                            name="description" 
                            required 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                        />
                    </div>
                    <div className="movie-form">
                        <label className="movie-label" htmlFor="theaterId">Theater ID:</label>
                        <input 
                            type="text" 
                            className="movie-input" 
                            id="theaterId" 
                            name="theaterId" 
                            required 
                            value={theaterId} 
                            onChange={(e) => setTheaterId(e.target.value)} 
                        />
                    </div>
                    <div className="movie-form">
                        <label className="movie-label" htmlFor="releaseDate">Release Date:</label>
                        <input 
                            type="date" 
                            className="movie-input"
                            id="releaseDate" 
                            name="releaseDate" 
                            required 
                            value={releaseDate} 
                            onChange={(e) => setReleaseDate(e.target.value)} 
                        />
                    </div>
                    <button type="submit" className="movie-button" onClick={(e) => handleUpdateClick(e)}>Update Movie</button>
                    <button type="button" className="movie-button" onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
    );
}

export default Movieupdate;
