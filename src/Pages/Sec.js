import React, { useState } from "react";
import "./Sec.css";
import logo1 from "../../img/Logo/logo1.png";
import Button from "../../component/Button";
import Call from "../../img/Call.png";
import Mess from "../../img/Mess.png";
import World from "../../img/World.png";
import port from "../../img/port.png";
import Man1 from "../../img/Man1.png";
import Man2 from "../../img/Man2.png";
import Man3 from "../../img/Man3.png";
import NavBar from "../../component/NavBar/NavBar"

const Sec = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      {/* <header className="header">
        <img src={logo1} alt="Teckas Technologies Logo" className="logo" />

        <div className="header-icons">
          <img src={port} alt="Portfolio Icon" className="portfolio-btn" />
          <img src={World} alt="World Icon" className="icon" />
          <img src={Mess} alt="Mess Icon" className="icon" />
          <img src={Call} alt="Call Icon" className="icon" />
        </div>

        {/* Mobile Menu Button */}
        {/* <div className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </div>
      </header> */}

      {/* Mobile Dropdown Menu with Smooth Slide Animation */}
      {/* <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#projects">Our Projects</a></li>
        </ul>
      </div> */} 
      <NavBar/>

      <main className="content">
        <h1 className="headline">We help Startups bring<br></br>their Ideas to Life</h1>
        <p className="subheadline">
          At Teckas Technologies, we turn your ideas into reality with smart solutions in<br></br>
          Blockchain, AI, Web, and Mobile apps. Let’s make something awesome together!
        </p>
        <Button />
      </main>

      <div className="bottom">
        <div className="clients">
          <img src={Man1} alt="Client 1" className="client-img" />
          <img src={Man2} alt="Client 2" className="client-img overlap" />
          <img src={Man3} alt="Client 3" className="client-img overlap" />
        </div>
        <div className="bottom-label">
          Trusted by 15 amazing clients and counting. Read Testimonials
        </div>
      </div>
    </div>
  );
};

export default Sec;
