import React from "react";
import "./Footer.css";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import Logo from "../../img/Logo/logo.png";
import twitter from "../../img/twitter.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-logo">
            <img src={Logo} alt="Teckas Technologies Logo" className="logo-image" />
          </div>
          <div className="footer-social">
            <FaLinkedin className="social-icon" onClick={()=> window.open("https://www.linkedin.com/company/teckas/", "_blank")} />
            {/* <FaTwitter className="social-icon" /> */}
            <img src={twitter} alt="twitter icon" className="social-icon" style={{ width: "30px" }} onClick={()=> window.open("https://x.com/0xteckas", "_blank")} />
            <FaYoutube className="social-icon" onClick={()=> window.open("https://www.youtube.com/@immanueljohnsoftware", "_blank")} />
            <FaInstagram className="social-icon" onClick={()=> window.open("https://www.instagram.com/teckas_technologies/", "_blank")} />
          </div>
        </div>
        <hr className="blue-line" />
        <div className="footer-content">
          <div>
            <h2 className="footer-heading">Services</h2>
            <ul className="footer-list">
              <li>Blockchain Development</li>
              <li>AI Solutions</li>
              <li>Web Development</li>
              <li>Mobile App Development</li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Company</h2>
            <ul className="footer-list">
              <li>About us</li>
              <li><Link to="/blogs" className="link">Blogs</Link></li>
              <li><Link to="/case-study" className="link">Case Studies</Link></li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Legal</h2>
            <ul className="footer-list">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h2 className="footer-heading">Get in Touch</h2>
            <ul className="footer-list">
              <li>contact@teckas.com</li>
              <li>+91 9876543210</li>
              <li>Teckas Technologies Pvt Ltd,<br></br>Chennai, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">© 2025 Teckas Technologies Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
