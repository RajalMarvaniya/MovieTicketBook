import React, { useState, useEffect } from 'react';
import './MainContent.css';
import Navbar from './Navbar';
import axios from 'axios';
import UpdateT from './UpdateT';
import { useNavigate } from 'react-router-dom'; 

const MainContent = () => {
    const [theaters, setTheaters] = useState([]);
    const [selectedTheater, setSelectedTheater] = useState(null); // State to store selected theater for editing
    const navigate = useNavigate(); 

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

    const handleDeleteTheater = (id) => {
        // Send DELETE request to delete theater by ID
        axios.delete(`http://localhost:8080/theaters/${id}`)
            .then(response => {
                // Remove deleted theater from the list of theaters
                setTheaters(theaters.filter(theater => theater.id !== id));
                alert('Theater deleted successfully.');
            })
            .catch(error => {
                alert('Error deleting theater:', error);
            });
    };

    const handleEditTheater = (theater) => {
        // Navigate to the update page with the selected theater data
        navigate('/updatet', { state: { theater: theater } });
    };

    return (
        <>
            <Navbar />
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>Theater Id</th>
                            <th>Theater Name</th>
                            <th>Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {theaters.map(t => (
                            <tr key={t.id}>
                                <td>{t.id}</td>
                                <td>{t.name}</td>
                                <td>{t.location}</td>
                                <td>
                                    <button className="delete-button button" onClick={() => handleDeleteTheater(t.id)}>Delete</button>
                                    <button className="edit-button button" onClick={() => handleEditTheater(t)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    );
}

export default MainContent;
