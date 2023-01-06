import React from "react";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

export const Footer = () => {
  const { setHomeLink } = useStateContext();
  return (
    <footer className="footer">
      <div className="container">
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link
                to={"/privacy"}
                className="has-text-black"
                onClick={() => setHomeLink(true)}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to={"/cookies"}
                className="has-text-black"
                onClick={() => setHomeLink(true)}
              >
                Cookies
              </Link>
            </li>
            <li>
              <Link
                to={"/complaints"}
                className="has-text-black"
                onClick={() => setHomeLink(true)}
              >
                Complaints
              </Link>
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
