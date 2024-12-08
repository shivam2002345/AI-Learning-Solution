import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import logo from "../../assets/yttalogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Company Name */}
        <div className="footer-logo">
        <Link to="/admin">
        <img src={logo} alt="Company Logo" className="logo" />
          </Link>
         
          <span className="company-name">AI Learning Solutions</span>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>AI Learning Solutions</p>
          <p>1234 Tech Park, Innovation Lane</p>
          <p>Cityville, TechState 56789</p>
          <p>Email: contact@ailearningsolutions.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <h4>Follow Us</h4>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-icon">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AI Learning Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;