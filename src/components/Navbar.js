import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/profile">Profilo</Link>
        </li>
        <li>
          <Link to="/admin">Amministrazione</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;