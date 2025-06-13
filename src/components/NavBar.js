import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar">
    <Link to="/todos">Tasks</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default NavBar;
