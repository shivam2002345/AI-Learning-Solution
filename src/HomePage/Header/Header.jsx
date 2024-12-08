import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";
import logo from '../../assets/ails.jpg'

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
      <Link to="/">
          <img src={logo} alt="YTTA Logo" />
          </Link>
      </div>
      <nav className="navbar-links">
        <ul>
          <li><Link to="/contact">Contact us</Link></li>
          <li className="dropdown">
          <Link to="/training-menu">Training Menu</Link>
            <ul className="dropdown-menu">
            <li><Link to="/course1">Course 1</Link></li>
            <li><Link to="/course2">Course 2</Link></li>
            </ul>
          </li>
          <li className="dropdown">
          <Link to="/webinar">Webinars</Link>
            <ul className="dropdown-menu">
            <li><Link to="/webinar1">Webinar 1</Link></li>
            <li><Link to="/webinar2">Webinar 2</Link></li>
            </ul>
          </li>
          <li><Link to="/aboutus">About us</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
