import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar is-fixed-top is-black">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src={logo}
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="50"
            ></img>
          </a>
          <div
            className="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div d="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="finance-options" className="button is-link">
                  Finace Options
                </Link>
                <Link to="car-types" className="button is-link">
                  Car Types
                </Link>
                <Link className="button is-link" to="contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
