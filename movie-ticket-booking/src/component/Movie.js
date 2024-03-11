import React, { useState, useEffect } from 'react';
import './Movie.css';
import TheaterCard from './TheaterCard';
import axios from 'axios';

const Movie = () => {
    const [theaters, setTheaters] = useState([]);

    useEffect(() => {
        // Fetch theaters from the backend API
        axios.get("http://localhost:8080/theaters")
            .then(response => {
                setTheaters(response.data);
            })
            .catch(error => {
                console.error('Error fetching theaters:', error);
            });
    }, []);

    return (
        <div className='body1'>
            <h1 className='Theater'>Theater</h1>
            <div className="theater-page">
                <div className="movie-card-row">
                    {theaters.map(theater => (
                        <div key={theater.id} className="movie-card-column">
                            
                            <TheaterCard theaterName={theater.name} theaterId={theater.id} imageUrl={require('../images/movietime.jpg')} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Movie;
