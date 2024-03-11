import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddMovieForm.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const AddMovieForm = () => {
  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    theater: '',
    releaseDate: ''
  });

  const [theaters, setTheaters] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchTheaters();
  }, []);

  const fetchTheaters = () => {
    axios.get('http://localhost:8080/theaters')
      .then(response => {
        setTheaters(response.data);
      })
      .catch(error => {
        console.error('Error fetching theaters:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedTheater = theaters.find(theater => theater.id.toString() === movieData.theater);
    const formattedMovieData = {
      ...movieData,
      theater: selectedTheater ? { id: selectedTheater.id } : null
    };

    axios.post('http://localhost:8080/addmovie', formattedMovieData)
      .then(response => {
        alert('Movie added successfully');
        navigate('/showmovie');
        setMovieData({
          title: '',
          description: '',
          theater: '',
          releaseDate: ''
        });
        
      })
      .catch(error => {
        console.error('There was a problem with your Axios request:', error);
      });
  };

  return (
    <div>
      <Navbar/>
    <div className='container1'>
      <form className='form1' onSubmit={handleSubmit}>
        <div>
          <label className='addmovie'><b>Add Movie</b></label>
        </div>
        <div className="movie-form">
          <label className="movie-label" htmlFor="movieName">Movie Name:</label>
          <input type="text" className="movie-input" id="movieName" name="title" value={movieData.title} onChange={handleChange} required />
        </div>
        <div className="movie-form">
          <label className="movie-label" htmlFor="movieDescription">Movie Description:</label>
          <input type="text" className="movie-input" id="movieDescription" name="description" value={movieData.description} onChange={handleChange} required />
        </div>
        <div className="movie-form">
          <label className="movie-label" htmlFor="theaterId">Theater:</label>
          <select className="movie-input" id="theaterId" name="theater" value={movieData.theater} onChange={handleChange} required>
            <option value="">Select Theater</option>
            {theaters.map(theater => (
              <option key={theater.id} value={theater.id}>{theater.name}</option>
            ))}
          </select>
        </div>
        <div className="movie-form">
          <label className="movie-label" htmlFor="releaseDate">Release Date:</label>
          <input type="date" className="movie-input" id="releaseDate" name="releaseDate" value={movieData.releaseDate} onChange={handleChange} required />
        </div>
        <button type="submit" className="movie-button">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default AddMovieForm;
