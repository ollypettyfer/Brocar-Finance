import React from "react";
import Carousel from "./Carousel";
import green from "./images/stars1.png";

export const Trustapilot = () => {
  return (
    <div className="section ">
      {/* <!-- TrustBox widget - Micro Review Count --> */}
      <div
        className="container 
      "
      >
        <div className="has-text-centered title title-edit pb-3 is-size-2-desktop">
          What Our Customers Say
        </div>
        <div className="mb-4">
          <div className="is-flex is-justify-content-center">
            <figure className="image img-size">
              <img src={green} alt=""></img>
            </figure>
          </div>
          <Carousel />
        </div>
        <div
          className="trustpilot-widget"
          data-locale="en-GB"
          data-template-id="5419b6a8b0d04a076446a9ad"
          data-businessunit-id="6373f3ecf759da4900b007be"
          data-style-height="24px"
          data-style-width="100%"
          data-theme="light"
          data-min-review-count="10"
          data-without-reviews-preferred-string-id="1"
          data-style-alignment="center"
        >
          <a
            href="https://uk.trustpilot.com/review/brocarfinance.co.uk"
            // target="_blank"
            // rel="noopener"
          >
            Trustpilot
          </a>
        </div>
      </div>
    </div>
  );
};
