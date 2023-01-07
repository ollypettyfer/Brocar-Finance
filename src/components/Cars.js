import React from "react";
import find from "./images/flow1.png";
import finance from "./images/flow2.png";
import deliver from "./images/flow3.png";

export const Cars = () => {
  return (
    <>
      {/* How can we help section */}

      <section className="section">
        <div className="container">
          <h1 className="title is-2 p-3 has-text-centered is-2 title-edit">
            How It Works
          </h1>
          <p className="subtitle pb-4 has-text-centered">
            Years of industry experience combine to deliver our clients
            essential benefits.
          </p>
          <div className="columns column-gap">
            <div className="column has-text-centered mb-3">
              <div className="">
                <div className="card-content">
                  <div className="content">
                    <p className="title">Find your car</p>
                  </div>
                  <div className="card-image">
                    <figure className="image is-128x128">
                      <img src={find} alt="car"></img>
                    </figure>
                  </div>
                  <div className="content">
                    Once you have sets your sights on the model you want, our
                    team will explore options including how long you want to
                    finance the car for, and what funding options may suit your
                    lifestyle
                  </div>
                </div>
              </div>
            </div>
            <div className="column has-text-centered mb-3">
              {" "}
              <div className="">
                <div className="card-content">
                  <div className="content">
                    <p className="title ">Apply for your finance</p>
                  </div>
                  <div className="card-image">
                    <figure className="image is-128x128 ">
                      <img src={finance} alt="car"></img>
                    </figure>
                  </div>
                  <div className="content">
                    Once we have tailored your finance solution, the next step
                    is to apply to the selected lender for a quick decision.
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className="column has-text-centered  mb-3">
              {" "}
              <div className="">
                <div className="card-content">
                  <div className="content">
                    <p className="title">Take Delivery</p>
                  </div>
                  <div className="card-image">
                    <figure className="image is-128x128 ">
                      <img src={deliver} alt="car"></img>
                    </figure>
                  </div>
                  <div className="content">
                    Upon approval, we pay the dealer, you take delivery of your
                    vehicle. It really is that simple!
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
