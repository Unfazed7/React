import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import img1 from "./images/yaari.png";
import "./Navbar.css";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Slider from './Slider';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul className="nav-links">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="./Home">Home</Link>
          </li>
          <li className={location.pathname === "/about" ? "active" : ""}>
            <Link to="./About">About</Link>
          </li>
          <li className={location.pathname === "/contact" ? "active" : ""}>
            <Link to="./Contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={img1} alt="" className="logo" />
        <input type="text" placeholder="Search" className="search-bar" />
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Slider />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>  
    </Router>
    
  );
};


export default App;
