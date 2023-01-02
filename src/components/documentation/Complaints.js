import React from "react";

export const Complaints = (setShowNav) => {
  return (
    <>
      <section className="section mt-6">
        <div className="container content">
          <h1>Complaints Procedure</h1>
          <p>
            At Brocar finance customer service is of the utmost importance to
            what we do. Whilst we do our best to minimise the risk of any
            dissatisfaction, we acknowledge that from time to time this is not
            always possible. If this ever happens we encourage you to share your
            experience so that we can continue to improve our service.
          </p>
          <br></br>
          You can do so in the following ways:
          <ul>
            <li> Telephone: </li>

            <li>
              {" "}
              Email:
              <a
                className="has-text-warning pl-2"
                href="mailto:complaints@brocarfinance.co.uk"
              >
                complaints@brocarfinance.co.uk
              </a>
            </li>
            <li>
              Post: Complaints Department Brocar Finance 15-17 Upper George
              Street, Luton, LU1 2RD
            </li>
          </ul>
          <h3>What you can expect from us:</h3>
          <br></br>
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
          <h3>If you are not satisfied with our response</h3>
          <br></br>
          <p>
            If you are still not satisfied for any reason you could be eligible
            to refer your complaint to the Financial Ombudsman Service.
          </p>
          <br></br>
          <p>You can get in contact with them via the following methods:</p>
          <br></br>
          <p>Telephone: 0800 023 4567</p>
          <p>
            Email:
            <a
              className="has-text-warning pl-2"
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
              className="has-text-warning pl-2"
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
