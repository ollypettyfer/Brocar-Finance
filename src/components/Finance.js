import React from "react";
import car1 from "./images/brocar-14.jpg";
import car2 from "./images/brocar-09.jpg";
import car3 from "./images/brocar-10.jpg";
import car4 from "./images/brocar-12.jpg";

export const Finance = () => {
  return (
    <section className="section mb-5 ">
      <div className="container">
        <hr></hr>
        <h1 className="title p-6 has-text-centered title-edit is-2">
          Finance Options
        </h1>
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
            <div className="card card-shadow">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={car1} alt="Placeholder"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title title-edit is-4 ">
                    Personal Contract Purchase
                  </p>
                </div>
                <div className="content is-size-7-tablet is-size-6-widescreen is-size-7-desktop">
                  Personal Contract Purchase, commonly referred to as PCP, can
                  be best described as a long term rental where customers can
                  use their vehicle until the end of their agreement before
                  deciding whether they want to keep their vehicle or not.
                  <br></br>
                  <br></br> The flexibility, lower monthly payments and
                  guaranteed minimum future values are all reasons why this is
                  an increasingly popular option. <br></br>
                  {/* <br></br>In the past few years with company car taxes rising,
                  many people opting out of company car schemes, particular
                  those with car allowances, have moved to this method of
                  funding to help avoid company car tax. */}
                  <br></br>
                  At the end of the agreement there are three options for you to
                  choose from. Pay the GMFV (including any option to purchase
                  fee) and take ownership of the vehicle. Hand back the vehicle
                  subject to condition and mileage. Part exchange the vehicle
                  for another one, where you can use any equity you may have
                  along with a deposit if required. You should also be aware
                  that you could have to cover any shortfall.
                </div>
              </div>
            </div>
          </div>
          <div className="column has-text-centered">
            {" "}
            <div className="card card-shadow">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={car2} alt="Placeholder"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4 title-edit">Hire Purchase</p>
                </div>

                <div className="content is-size-7-tablet is-size-7-desktop is-size-6-widescreen">
                  Hire purchase has been a very popular way for customers to
                  fund the purchase of their vehicles.
                  <br></br>
                  <br></br>
                  Hire purchase is a fixed cost loan secured onto the vehicle.
                  You will usually pay a cash deposit, part exchange a vehicle
                  or both and make monthly payments typically between a 24 or 60
                  month term.
                  <br></br>
                  <br></br>
                  At the end of the term you will pay a small option to purchase
                  fee and the ownership of the vehicle is now yours. <br></br>
                  <br></br>
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
            <div className="card card-shadow">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={car3} alt="Placeholder"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4 title-edit">Refinance Your Car</p>
                </div>
                <div className="content is-size-7-tablet is-size-7-desktop is-size-6-widescreen">
                  The cost of living crisis has played its part in the increased
                  uptake of this funding method. <br></br>
                  <br></br>Whether you’re at the end of your agreement and want
                  to keep your car, hoping to reduce your monthly outgoings or
                  if you want to take steps towards ownership of your vehicle
                  this could be an option worth exploring.<br></br>
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
          <div className="column has-text-centered">
            {" "}
            <div className="card card-shadow">
              <div className="card-image">
                <figure className="image is-3by2">
                  <img src={car4} alt="Placeholder"></img>
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <p className="title is-4 title-edit">Lease Purchase</p>
                </div>

                <div className="content is-size-7-tablet is-size-7-desktop is-size-6-widescreen">
                  Lease Purchase is often compared to Hire Purchase, the main
                  difference between the two agreements is that Lease Purchase
                  agreements have a balloon payment. This can make it a
                  preferred method of funding to customers where their priority
                  is keeping their monthly payment low.
                  <br></br>
                  <br></br>
                  The finance company will use information you provide such as
                  the term you would like the finance over and what mileage you
                  plan to do on the vehicle to set a balloon payment based on
                  the expected value of the car at the end of the term. You can
                  then make a lump sum payment to clear the balloon payment and
                  keep the car or use the vehicle as part exchange against
                  another.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
