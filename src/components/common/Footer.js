import React from "react";

export const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <footer className="footer">
      <div className="container">
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="privacy" className="has-text-black">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="cookies" className="has-text-black">
                Cookies
              </a>
            </li>
            <li>
              <div
                className="has-text-black"
                onClick={() => openInNewTab("/complaints")}
              >
                Complaints
              </div>
            </li>
          </ul>
        </nav>

        <h2 className="has-text-centered ">
          Brocar Ltd Registered in England and Wales under registration number:
          13157992. Headquarters: Brocar, Regus House, Fairbourne Drive, Milton
          Keynes, MK10 9RG, United Kingdom. Brocar Ltd is authorised and
          regulated by the Financial Conduct Authority (our Financial Conduct
          Authority Registry Number is 944254). VAT number TBC. Brocar Ltd is a
          credit broker and not a lender. We can introduce you to a group of
          selected lenders. Calls are recorded for compliance and training
          purposes.
        </h2>
      </div>
    </footer>
  );
};
