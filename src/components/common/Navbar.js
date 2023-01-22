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
    document.getElementById("test").style.color = "#3ba27e";
    document.getElementById("test2").style.color = "#3ba27e";
    document.getElementById("test3").style.color = "#3ba27e";
    document.getElementById("test4").style.color = "#3ba27e";
    document.getElementById("test5").style.color = "#3ba27e";
    document.getElementById("navbar-color").style.backgroundColor = "white";
    document.getElementById("navbar-color").style.top = "0";
    document.getElementById("con-buttons").style.bottom = "0px";
  } else {
    document.getElementById("navbar-color").style.top = "-0.1px";
    document.getElementById("navbar-color").style.backgroundColor =
      "rgba(0,0,0,0.0)";
    document.getElementById("test").style.color = "#3ba27e";
    document.getElementById("test2").style.color = "#3ba27e";
    document.getElementById("test3").style.color = "#3ba27e";
    document.getElementById("test4").style.color = "#3ba27e";
    document.getElementById("test5").style.color = "#3ba27e";
    document.getElementById("con-buttons").style.bottom = "-40px";
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
            <img src={navbarlogo} alt="Brocar finance logo"></img>
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
            <a className=" navbar-item is-link navbar-btn" href="/" id="test">
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
                  offset={-150}
                  duration={500}
                  id="test2"
                >
                  About us
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
                  id="test3"
                >
                  How it works
                </Scroll.Link>
              </div>
              <div className="navbar-link is-arrowless">
                <Scroll.Link
                  to="finance-section"
                  className="navbar-item navbar-btn is-link"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  id="test4"
                >
                  Finance Options
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
                  id="test5"
                >
                  Contact
                </Scroll.Link>
              </div>
              <div className="navbar-link is-arrowless">
                <a
                  href="tel:+01908 032694"
                  className="navbar-btn quote-btn navbar-item"
                >
                  CALL NOW
                </a>
              </div>
              <div className="navbar-link is-arrowless">
                <a
                  href="#contact"
                  className=" navbar-btn quote-btn navbar-item"
                >
                  GET A QUOTE
                </a>
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
