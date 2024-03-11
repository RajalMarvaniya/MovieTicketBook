// AddTheater.jsx
import React, { useState } from 'react';
import './AddTheater.css';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
const AddTheater = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const theaterData = {
      name: name,
      location: location
    };

    try {
      const response = await axios.post("http://localhost:8080/addTheater", theaterData);
      
      if (response.status === 201) {
        alert('Theater added successfully!');
        navigate('/maincontent');
        // Optionally, you can redirect the user to another page or show a success message.
      } else {
        console.error('Failed to add theater.');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("already exists")
      } else {
        console.error('Error adding theater:', error);
      }
    }
  };

  return (
    <div>
      <Navbar/>
    <div className="container2">
      
      <form onSubmit={handleSubmit} className='form2'>
        <h2 className="mb-4">Add Theater</h2>
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
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Theater</button>
      </form>
    </div>
    </div>
  );
}

export default AddTheater;


// import React, { useState } from 'react';
// import axios from 'axios';
// import './AddTheater.css';

// const AddTheater = () => {
//   const [name, setName] = useState('');
//   const [location, setLocation] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const theaterData = {
//       name: name,
//       location: location
//     };

//     try {
//       const response = await axios.post("http://localhost:8080/addTheater", theaterData);

//       if (response.status === 201) {
//         console.log('Theater added successfully!');
//         setName('');
//         setLocation('');
//         setErrorMessage('');
//       } else {
//         console.error('Failed to add theater.');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setErrorMessage("Theater already exists.");
//       } else {
//         console.error('Error adding theater:', error);
//       }
//     }
//   };

//   return (
//     <div className="container2">
//       <form onSubmit={handleSubmit} className='form2'>
//         <h2 className="mb-4">Add Theater</h2>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//         <div className="form-group">
//           <label htmlFor="name">Theater Name:</label>
//           <input 
//             type="text" 
//             className="form-control" 
//             id="name" 
//             name="name" 
//             required 
//             value={name} 
//             onChange={(e) => setName(e.target.value)} 
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="address">Location:</label>
//           <input 
//             type="text" 
//             className="form-control" 
//             id="address" 
//             name="location" 
//             required 
//             value={location} 
//             onChange={(e) => setLocation(e.target.value)} 
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Add Theater</button>
//       </form>
//     </div>
//   );
// }

// export default AddTheater;
