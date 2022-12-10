import React from "react";

export const Trustapilot = () => {
  return (
    <div className="section is-medium">
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
          // target="_blank"
          // rel="noopener"
        >
          Trustpilot
        </a>
      </div>
    </div>
  );
};
