import React from "react";
import logo4 from "./images/logo4.jpg";

export const Finance = () => {
  return (
    <section className="section is-medium ">
      <div className="container">
        <h1 className="title p-6 has-text-centered">FINANCE OPTIONS</h1>
        <p className="subtitle pb-2 has-text-centered">
          Automotive finance can seem complicated. There are a few key products
          designed to suit different buying needs. We can help you to understand
          the options available. Please refer to Finance Suitability Questions
          for further information
        </p>
        <div className="columns">
          <div className="column  has-text-centered">
            {/* <div className="columns">
            <div className="column"> */}
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={logo4} alt="Placeholder"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4">PCP</p>
                </div>
                <div className="content">
                  Personal Contract Purchase, commonly referred to as PCP, can
                  be best described as a long term rental where customers can
                  use their vehicle until the end of their agreement before
                  deciding whether they want to keep their vehicle or not.
                  <br></br>
                  <br></br> The flexibility, lower monthly payments and
                  guaranteed minimum future values are all reasons why this is
                  an increasingly popular option. <br></br>
                  <br></br>In the past few years with company car taxes rising,
                  many people opting out of company car schemes, particular
                  those with car allowances, have moved to this method of
                  funding to help avoid company car tax.
                </div>
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
            {" "}
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={logo4} alt="Placeholder"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4">HP</p>
                </div>

                <div className="content">
                  Hire Purchase is a straight forward way off spreading the cost
                  of your vehicle over a fixed period, usually between 24 and 60
                  months. Fixed monthly repayments with a fixed interest rate
                  can make budgeting easier. This is usually the funding method
                  of choice for customers who plan on keeping their car for the
                  long term. <br></br>
                  <br></br>With HP the customer decides the deposit, typically
                  up to 50% of the vehicle value, with the remaining balance
                  along with the interest is repaid over the agreement term.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
            {" "}
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={logo4} alt="Placeholder"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4">Refinance Your Car</p>
                </div>
                <div className="content">
                  The cost of living crisis has played its part in the increased
                  uptake of this funding method. Whether you’re at the end of
                  your agreement and want to keep your car, hoping to reduce
                  your monthly outgoings or if you want to take steps towards
                  ownership of your vehicle this could be an option worth
                  exploring.<br></br>
                  <br></br> You would essentially be taking out a new finance
                  agreement and settling any finance you may currently have,
                  which can lower monthly payments or reduce the remaining term
                  of finance.
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </div>
              </div>
            </div>
            {/* </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
