import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import * as Scroll from "react-scroll";

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
                <Scroll.Link
                  to="finance-section"
                  className="button is-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Finace Options
                </Scroll.Link>
                <Scroll.Link
                  to="cars-section"
                  className="button is-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Car Types
                </Scroll.Link>
                <Scroll.Link
                  className="button is-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Contact
                </Scroll.Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
