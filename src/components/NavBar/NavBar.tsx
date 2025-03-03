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
          <a className="rectangle portfolio" href="#portfolio">
            <span>Portfolio</span>
            <img src={portfolio} alt="Portfolio Icon" className="portfolio-btn" />
          </a>
          <a className="circle dns" href="#dns">
            <img src={world} alt="DNS Services" className="icon" />
          </a>
          <a className="circle message" href="#message">
            <img src={message} alt="Message" className="icon" />
          </a>
          <a className="circle call" href="#call">
            <img src={call} alt="Call us" className="icon" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
      </header>

      {/* Mobile Dropdown Menu with Smooth Slide Animation */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div className="mobile-menu-container">
          <ul>
            <li>
              <a href="#portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="#about">SERVICES</a>
            </li>
            <li>
              <a href="#contact">TESTIMONIALS</a>
            </li>
            <li>
              <a href="#projects">CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
