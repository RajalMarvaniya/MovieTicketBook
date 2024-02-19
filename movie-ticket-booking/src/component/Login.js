import React from 'react';
import './Login.css'; // Import CSS file

function Login() {
  return (
    <div className="container">
      <form action="showmovies">
        <h1>Login</h1>
        <label htmlFor="username"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="username" required />

        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
