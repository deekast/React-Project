import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/view-pottery">View Pottery</Link></li>
        <li><Link to="/add-pottery">Add Pottery</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
