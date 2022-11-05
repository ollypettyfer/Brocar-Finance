import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href="privacy" className="has-text-black">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="cookies">Cookies</a>
          </li>
          <li>
            <a href="complaints">Complaints</a>
          </li>
        </ul>
      </nav>

      <h2 className="has-text-centered has-background-grey-lighter">
        Holmesdale Finance Limited t/a Holmesdale Finance is a credit broker not
        a lender. As an authorised credit broker Holmesdale Finance has access
        to a panel of lenders which may be able to assist you in financing your
        purchase or re-financing / releasing equity from your current asset. We
        may receive a payment(s) or other benefits from finance providers should
        you decide to enter into an agreement with them, typically either a
        fixed fee or a fixed percentage of the amount you borrow. The payment we
        receive may vary between finance providers and product types. The
        payment received does not impact the finance rate offered. Holmesdale
        Finance is authorised and regulated by the Financial Conduct Authority,
        FRN:794742 and is also registered with the Information Commissioners
        Office under registration reference: ZA297183. All finance applications
        are subject to status, terms and conditions apply, UK residents only,
        18’s or over, Guarantees may be required.
      </h2>
    </footer>
  );
};
