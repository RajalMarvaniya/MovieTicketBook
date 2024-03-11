import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="menu">
        <ul>
          <li><a href="/addmovie">Add Movie</a></li>
          <li><a href="/addTheater">Add Theater</a></li>  
          <li><a href="/maincontent">Theaters</a></li>
          <li><a href="/showmovie">Movies</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
