// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/registration">Registration</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/addexpense">Add Expense</Link></li>
        <li><Link to="/editexpense">Edit Expense</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
