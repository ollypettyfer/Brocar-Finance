import React from "react";
import bulma from "bulma";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link to="/" className="navbar-item">
                BROCAR FIANCE
              </Link>
            </div>

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
        </div>
      </nav>
    </>
    // <nav className="navbar">
    //   <div className="container">
    //     <div id="navMenu" className="navbar-menu">
    //       <div className="navbar-start">
    //         {/* <img src={logo} alt="car-logo" className="is-small
    //         "></img> */}
    //       </div>
    //       <div className="navbar-end">
    //         <div className="navbar-item">
    //           <Link to="/about-us" className="navbar-item">
    //             ABOUT US
    //           </Link>
    //           <Link to="/finance-options">FINANCE OPTIONS</Link>
    //           <Link to="car-types">CAR TYPES</Link>
    //           <Link to="contact">CONTACT US</Link>
    //           <div className="buttons">
    //             <button className="button is-light">REQUEST A QUOTE</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
};
