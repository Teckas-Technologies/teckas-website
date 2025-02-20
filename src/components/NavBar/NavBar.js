import React, { useState } from "react";
import logo1 from "../../img//Logo/logo1.png";
import port from "../../img/port.png"; 
import Call from "../../img/Call.png";
import Mess from "../../img/Mess.png";
import World from "../../img/World.png";
import "./NavBar.css"; // Ensure the CSS file matches your style

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="header">
        <img src={logo1} alt="Teckas Technologies Logo" className="logo" />

        <div className="header-icons">
          <img src={port} alt="Portfolio Icon" className="portfolio-btn" />
          <img src={World} alt="World Icon" className="icon" />
          <img src={Mess} alt="Mess Icon" className="icon" />
          <img src={Call} alt="Call Icon" className="icon" />
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
      </header>

      {/* Mobile Dropdown Menu with Smooth Slide Animation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#projects">Our Projects</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
