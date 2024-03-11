import React, { useState, useEffect } from 'react';
import './AddTheater.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const UpdateT = ({ onTheaterUpdated }) => {
    const routeLocation = useLocation();
    const selectedTheater = routeLocation.state.theater;
    const [name, setName] = useState(selectedTheater.name);
    const [locationValue, setLocationValue] = useState(selectedTheater.location);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleClose = () => {
        // Implement closing logic here, e.g., hiding the UpdateT component
    };

    const handleSubmit = async (event) => {
        //event.preventDefault();
        
        const updatedTheaterData = {
            name: name,
            location: locationValue
        };

        try {
            const response = await axios.put(`http://localhost:8080/theaters/${selectedTheater.id}`, updatedTheaterData);
            
            if (response.status === 200) {
                console.log('Theater updated successfully!');
                navigate("/maincontent")
            } else {
                console.error('Failed to update theater.');
            }
        } catch (error) {
            console.error('Error updating theater:', error);
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
        <div className="container2">
            <form onSubmit={handleSubmit} className='form2'>
                <h2 className="mb-4">Update Theater</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <div className="form-group">
                    <label htmlFor="name">Theater Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Location:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="address" 
                        name="location" 
                        required 
                        value={locationValue} 
                        onChange={(e) => setLocationValue(e.target.value)} 
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={(e) => handleUpdateClick(e)}>Update Theater</button>

                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default UpdateT;
