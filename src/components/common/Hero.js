import React, { useState } from "react";
import Modal from "./Modal";

export const Hero = () => {
  // MODAL SETTINGS
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* THIS NEEDS TO HAVE HERO IMG IN */}
      <section className="hero is-fullheight has-background">
        <img
          className="hero-background"
          src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80"
          alt="sports car"
        ></img>

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title hero-title has-text-black">BROCAR FINANCE</h1>
          </div>
        </div>
      </section>

      {/* START OF MODAL */}
      <div className="has-text-centered">
        <button
          onClick={() => setIsOpen(true)}
          className="button is-info is-responsive is-large"
        >
          GET A QUOTE
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div>

      {/* <!-- TrustBox widget - Micro Review Count --> */}
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
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
};
