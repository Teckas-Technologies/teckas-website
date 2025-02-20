import React, { useState } from "react";

import logo1 from "../../assets/teckas-logo.png";
import portfolio from "../../assets/navbar/nav_portfolio.png"; 
import call from "../../assets/navbar/nav_call.png";
import message from "../../assets/navbar/nav_message.png";
import world from "../../assets/navbar/nav_dns.png";

import "./NavBar.css"; // Ensure the CSS file matches your style

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="header">
        <img src={logo1} alt="Teckas Technologies Logo" className="logo" />

        <div className="header-icons">
          <div className="rectangle portfolio">
            <span>Portfolio</span>
            <img src={portfolio} alt="Portfolio Icon" className="portfolio-btn" />
          </div>
          <div className="circle dns">
            <img src={world} alt="DNS Services" className="icon" />
          </div>
          <div className="circle message">
            <img src={message} alt="Message" className="icon" />
          </div>
          <div className="circle call">
            <img src={call} alt="Call us" className="icon" />
          </div>
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
