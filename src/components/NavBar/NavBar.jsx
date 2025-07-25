import { useState } from 'react';
import './NavBar.css';

function NavBar() {

  return (
    <nav className="navbar">
      <div className="nav-bar-left">
        <i className="fa-solid fa-bars"></i>
        <i className="fa-solid fa-yin-yang"></i>
        </div>
      <div className="nav-bar-center">
        <ul className='nav-links'>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Programs</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </div>
       <div className="nav-bar-right">
          <button className='get-started-button'>Get Started</button>
      </div>
    </nav>
  )
}

export default NavBar