import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './Register.css'; // Import CSS file

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create user object with registration data
    const user = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password
    };

    // Make POST request to backend endpoint using Axios
    axios.post('http://localhost:8080/register', user)
      .then(response => {
        alert("REgistered successfully.")
        // Optionally, you can redirect the user to another page or show a success message
      })
      .catch(error => {
        console.error('Failed to register user:', error);
        // Handle error cases, such as displaying an error message to the user
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Register Here</h1>
        <label><b>Username</b></label>
        <input type="text" name="username" required onChange={(e) => setUsername(e.target.value)} />

        <label><b>Email</b></label>
        <input type="text" name="email" required onChange={(e) => setEmail(e.target.value)} />

        <label><b>Password</b></label>
        <input type="text" name="password" required onChange={(e) => setPassword(e.target.value)} />

        <label><b>Phone Number</b></label>
        <input type="text" name="phoneNumber" required onChange={(e) => setPhoneNumber(e.target.value)} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
