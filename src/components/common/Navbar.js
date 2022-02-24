import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-items">
        <img src={logo} alt="car-logo"></img>
        <ul>
          <Link to="/about-us">ABOUT US</Link>
          <Link to="/finance-options">FINANCE OPTIONS</Link>
          <Link to="car-types">CAR TYPES</Link>
          <Link to="contact">CONTACT US</Link>
        </ul>
        <button className="btn-request-quote">REQUEST A QUOTE</button>
      </div>
    </nav>
  );
};
