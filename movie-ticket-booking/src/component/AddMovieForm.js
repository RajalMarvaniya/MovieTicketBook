import React from 'react';
import './AddMovieForm.css'; // Import CSS file

const AddMovieForm = () => {
  return (
    <div className="container-movie-form">
      <h2 className="mb-4">Add Movie</h2>
      <form action="/movies/add" classname='form1' method="POST">
        <div className="movie-form">
          <label className="movie-label">Movie Name:</label>
          <input type="text" className="movie-input" id="movieName" name="title" required />
        </div>
        <div className="movie-form">
          <label className="movie-label">Movie Description:</label>
          <input type="text" className="movie-input" id="movieName" name="description" required />
        </div>
        <div className="movie-form">
          <label className="movie-label">Theater Id:</label>
          <input type="number" className="movie-input" id="movieName" name="theatre" required />
        </div>
        <div className="movie-form">
          <label className="movie-label">Release Date:</label>
          <input type="date" className="movie-input" id="movieDuration" name="releaseDate" required />
        </div>
        <button type="submit" className="movie-button">Submit</button>
      </form>
    </div>
  );
}

export default AddMovieForm;
