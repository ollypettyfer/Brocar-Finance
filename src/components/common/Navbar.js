import React from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.jpg";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar is-fixed-top is-black">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img
              src={logo}
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="50"
            ></img>
          </a>
          <div
            class="navbar-burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div d="navbarExampleTransparentExample" class="navbar-menu">
          <div className="navbar-start"></div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="finance-options" className="button is-danger">
                  Finace Options
                </Link>
                <Link to="car-types" className="button is-dark">
                  Car Types
                </Link>
                <Link to="contact" className="button is-link">
                  Contact
                </Link>
                <button className="button is-warning">REQUEST A QUOTE</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
