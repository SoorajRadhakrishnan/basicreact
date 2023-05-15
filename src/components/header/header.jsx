import React from 'react';
import "./header.css";
import Navbar from "../navbar/navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className='wrapper'>
        <h1 className='pooram'>THRISSUR POORAM</h1>
      </div>
    </header>
  );
}

export default Header;
