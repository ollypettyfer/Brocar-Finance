import React from "react";

export const Complaints = (setShowNav) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="section">
        <div className="footer-links-wrapper">
          <h1 className="title mt-6">Complaints Procedure</h1>
          <p>
            At Brocar finance customer service is of the utmost importance to
            what we do. Whilst we do our best to minimise the risk of any
            dissatisfaction, we acknowledge that from time to time this is not
            always possible. If this ever happens we encourage you to share your
            experience so that we can continue to improve our service.
          </p>
          <br></br>
          <h3 className="subtitle">You can do so in the following ways:</h3>
          <ul>
            <li>
              {" "}
              <b>Telephone: </b>
              01908 032694
            </li>

            <li>
              {" "}
              <b>Email:</b>
              <a
                className="title-edit pl-2"
                href="mailto:complaints@brocarfinance.co.uk"
              >
                complaints@brocarfinance.co.uk
              </a>
            </li>
            <li>
              <p>
                <b>Post: </b>
                Brocar Finance, Regus House, Fairbourne Drive, Atterbury, Milton
                Keynes MK10 9RG
              </p>
            </li>
          </ul>
          <br></br>
          <h3 className="subtitle">What you can expect from us:</h3>

          <ul>
            <li>
              {" "}
              We will acknowledge your complaint within 3 working days via your
              email address (if provided)
            </li>
            <li>
              {" "}
              We aim to resolve your complaint within 8 weeks, where this is
              possible, we will issue a final letter explaining our decision and
              the reason for this.
            </li>
            <li>
              If we are unable to resolve your complaint within 8 weeks you will
              receive a written/ electronic response to confirm we are unable to
              resolve your complaint within the usual timeframe. We will also
              provide an updated timeline or suggested way forward.
            </li>
          </ul>
          <br></br>
          <h3 className="subtitle">
            If you are not satisfied with our response
          </h3>

          <p>
            If you are still not satisfied for any reason you could be eligible
            to refer your complaint to the Financial Ombudsman Service.
          </p>
          <br></br>
          <p>You can get in contact with them via the following methods:</p>
          <br></br>
          <p>
            <b>Telephone: </b>
            0800 023 4567
          </p>
          <p>
            <b>Email:</b>
            <a
              className="title-edit pl-2"
              href="mailto:complaint.info@financial-ombudsman.org.uk"
            >
              complaint.info@financial-ombudsman.org.uk
            </a>
          </p>
          <br></br>
          <p>
            You can find out more about the Financial Ombudsman and the service
            they provide by visiting their website:
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="title-edit pl-2"
              href="https://www.financial-ombudsman.org.uk"
            >
              www.financial-ombudsman.org.uk
            </a>
          </p>
          <p>
            Brocar Finance Limited is authorised and regulated by the Financial
            Conduct Authority (944254)
          </p>
        </div>
      </section>
    </>
  );
};
