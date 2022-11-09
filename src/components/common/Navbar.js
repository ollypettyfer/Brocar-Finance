import React from "react";
import logo from "../images/logo.jpg";
import * as Scroll from "react-scroll";

document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", () => {
      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
});

export const Navbar = () => {
  return (
    <>
      <nav className="navbar is-fixed-top is-black">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img
              src={logo}
              alt="BROCAR FINANCE LOGO"
              width="112"
              height="50"
            ></img>
          </a>
          <div
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className="navbar-menu" id="navMenu">
          <div className="navbar-start"></div>

          <div className="navbar-end ">
            <div className="navbar-item ">
              <div className="navbar-link is-arrowless">
                <a className=" button is-link" href="/">
                  Home
                </a>
              </div>
              <div className="navbar-link is-arrowless">
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
              </div>

              <div className="navbar-link is-arrowless">
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
              </div>

              <div className="navbar-link is-arrowless">
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
