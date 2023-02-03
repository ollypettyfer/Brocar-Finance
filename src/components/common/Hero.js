// import React, { useState } from "react";
// import Modal from "./Modal";
import Mockup from "../images/MockUpEdit3.png";
import * as Scroll from "react-scroll";

export const Hero = () => {
  // MODAL SETTINGS
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* THIS NEEDS TO HAVE HERO IMG IN */}
      <section className="hero is-fullheight has-background">
        <img className="hero-background" src={Mockup} alt="sports car"></img>

        <div className="hero-body">
          {/* <div className="container has-text-centered">
            
          </div> */}
          {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal> */}
        </div>
        <div className="has-text-centered">
          <div className=" container has-text-white is-size-5-mobile is-size-2-desktop mb-4">
            Financial solutions for all of your automotive needs
          </div>
          <button className="button mb-6 btn-sty is-large">
            <Scroll.Link
              className="has-text-white "
              to="contact"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
            >
              Speak to the team
            </Scroll.Link>
          </button>
        </div>
        {/* <!-- TrustBox widget - Micro Review Count --> */}
        <div
          className="trustpilot-widget mb-6"
          data-locale="en-GB"
          data-template-id="5419b6a8b0d04a076446a9ad"
          data-businessunit-id="6373f3ecf759da4900b007be"
          data-style-height="30px"
          data-style-width="100%"
          data-theme="dark"
          data-min-review-count="10"
          data-without-reviews-preferred-string-id="1"
          data-style-alignment="center"
        >
          <a href="https://uk.trustpilot.com/review/brocarfinance.co.uk">
            Trustpilot
          </a>
        </div>
      </section>
    </>
  );
};
