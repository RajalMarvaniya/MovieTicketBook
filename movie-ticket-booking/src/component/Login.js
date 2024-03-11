import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './Login.css'; // Import CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email==="rajalmarvaniya48@gmail.com" && password==="rajal2211")
    {
      navigate('/maincontent');
    }
    else{
    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: email,
        password: password
      });

      console.log(response)

      // Handle login success
      console.log(response.data); // Log the response data

      // Redirect to Movie.js page
      navigate('/movie');
    } catch (error) {
      // Handle login error
      console.log('Login failed:', error);
      window.alert('Invalid username or password');
    }
  }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Username" name="username" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
