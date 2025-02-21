import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Logo from "../../img/Logo/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="brand-logo">
            <img src={Logo} alt="Teckas Technologies Logo" className="logo-image" />
          </div>
          <div className="footer-social">
            <FaLinkedin className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaInstagram className="social-icon" />
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
              <li>Case Studies</li>
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
