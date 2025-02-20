import React from "react";
import "./Sec.scss";
import Button from "../../components/Button";
// import Call from "../../img/Call.png";
// import Mess from "../../img/Mess.png";
// import World from "../../img/World.png";
// import port from "../../img/port.png";
// import Man1 from "../../img/Man1.png";
// import Man2 from "../../img/Man2.png";
// import Man3 from "../../img/Man3.png";
import NavBar from "../../components/NavBar/NavBar"

const Sec: React.FC = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

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
        <h1 className="headline">We help Startups bring</h1>
        <h1 className="headline">their Ideas to Life</h1>
        <p className="subheadline">
          At Teckas Technologies, we turn your ideas into reality with smart solutions in<br></br>
          Blockchain, AI, Web, and Mobile apps. Let's make something awesome together!
        </p>

        <Button className="chat-button" text="Got an Idea? Let's Chat!" />

        <div className="bottom">
        <div className="clients">
          <img src={""} alt="Client 1" className="client-img" />
          <img src={""} alt="Client 2" className="client-img overlap" />
          <img src={""} alt="Client 3" className="client-img overlap" />
        </div>
        <div className="bottom-label">
          Trusted by 15 amazing clients and counting. Read Testimonials
        </div>
      </div>
      </main>
    </div>
  );
};

export default Sec;
