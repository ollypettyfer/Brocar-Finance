import React from "react";
import navbarlogo from "../images/navbarlogo.png";
import * as Scroll from "react-scroll";
import { useStateContext } from "../context/ContextProvider";

//navbar scroll
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar-color").style.top = "0";
  } else {
    document.getElementById("navbar-color").style.top = "-70px";
  }
}

//navbar burger
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
  const { homeLink } = useStateContext();
  return (
    <>
      <nav className="navbar" id="navbar-color">
        <div className="navbar-brand">
          <a className="navbar-item pl-6" href="/">
            <img src={navbarlogo} alt="BROCAR FINANCE LOGO"></img>
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
          {/* <div className="navbar-start"></div> */}
          <div className="navbar-start nav-center"></div>
          <div className="navbar-link is-arrowless">
            <a className=" navbar-item is-link navbar-btn" href="/">
              Home
            </a>
          </div>
          {homeLink ? (
            false
          ) : (
            <>
              <div className="navbar-link is-arrowless">
                <Scroll.Link
                  to="scroll-to-fluent"
                  className="navbar-item navbar-btn is-link"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  About us
                </Scroll.Link>
              </div>
              <div className="navbar-link is-arrowless">
                <Scroll.Link
                  to="finance-section"
                  className="navbar-item navbar-btn is-link"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Finance Options
                </Scroll.Link>
              </div>
              <div className="navbar-link is-arrowless">
                <Scroll.Link
                  to="cars-section"
                  className="navbar-item navbar-btn is-link"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  How it works
                </Scroll.Link>
              </div>
              <div className="navbar-link is-arrowless">
                <Scroll.Link
                  to="contact"
                  className="navbar-item navbar-btn is-link"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Contact
                </Scroll.Link>
              </div>
            </>
          )}

          <div className="navbar-end ">
            <div className="navbar-item "></div>
          </div>
        </div>
      </nav>
    </>
  );
};
