import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate for navigation

import './MovieBookingForm.css'; // Import the CSS file

const MovieBookingForm = () => {
    const [user, setUser] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [numsTickets, setNumsTickets] = useState('');
    const [seattype, setSeattype] = useState('');
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate(); // Access the navigate function for navigation

    const location = useLocation();
    const theaterId = location.state;

    useEffect(() => {
        axios.get(`http://localhost:8080/moviesbyid/${theaterId}`)
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
            });
    }, [theaterId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Send booking data to the backend
            await axios.post('http://localhost:8080/bookings', {
                theaterId: theaterId,
                user: user,
                movie: selectedMovie,
                numTickets: numsTickets,
                seattype: seattype
            });
            // Navigate to congratulations page upon successful booking
            navigate('/congrats');
        } catch (error) {
            console.error('Error creating booking:', error);
            // Display an alert if booking fails
            alert('Booking failed. Please try again later.');
        }
    };

    return (
        <div className="booking-page">
            <form className="booking-form" onSubmit={handleSubmit}>
                <h1>Booking Form</h1>
                <label htmlFor="theatreId">
                    Theater Id:
                    <input
                        type="text"
                        id="theatreId"
                        value={theaterId}
                        disabled
                    />
                </label>
                <label htmlFor="user">
                    User name:
                    <input
                        type="text"
                        id="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="movieName">
                    Movie Name:
                    <select
                        id="movieName"
                        value={selectedMovie ? selectedMovie.id : ''}
                        onChange={(e) => setSelectedMovie(movies.find(movie => movie.id === parseInt(e.target.value)))}
                    >
                        <option value="">Select a movie</option>
                        {movies.map(movie => (
                            <option key={movie.id} value={movie.id}>{movie.title}</option>
                        ))}
                    </select>
                </label>
                <label htmlFor="seatNumber">
                    Seat Number:
                    <input
                        type="number"
                        id="seatNumber"
                        value={numsTickets}
                        onChange={(e) => setNumsTickets(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="seattype">
                    Seat Type:
                    <select
                        id="seattype"
                        value={seattype}
                        onChange={(e) => setSeattype(e.target.value)}
                    >
                        <option value="">Select a seat type</option>
                        <option value="Regular">Regular</option>
                        <option value="Premium">Premium</option>
                        <option value="VIP">VIP</option>
                    </select>
                </label>
                <br />
                <button type="submit">Book Ticket</button>
            </form>
        </div>
    );
};

export default MovieBookingForm;
