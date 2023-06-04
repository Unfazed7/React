import React, { useEffect, useState } from 'react';
import img1 from './images/yaari.png'
import './Navbar.css';
import './About';
import './Contact.js';
import './Home.js';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case '1':
          // Handle navigation to Home
          window.location.href = './Home.js';
          break;
        case '2':
          // Handle navigation to About
          window.location.href = './About.js';
          break;
        case '3':
          // Handle navigation to Contact
          window.location.href = './Contact.js';
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

 return (
    <nav className={`navbar ${isMobile ? 'mobile' : ''}`}>
      <div className="navbar-left">
        <ul className={`nav-links ${isMobile ? 'mobile' : ''}`}>
          <li><a href="./Home.js">Home</a></li>
          <li><a href="./About.js">About</a></li>
          <li><a href="./Contact.js">Contact</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={img1} alt="" className="logo" />
        <input type="text" placeholder="Search" className={`search-bar ${isMobile ? 'mobile' : ''}`} />
      </div>
    </nav>
  );
};

export default Navbar;
