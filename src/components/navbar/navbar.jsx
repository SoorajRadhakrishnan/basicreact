import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Gallery</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
