import React from "react";
import find from "./images/flow1.png";
import finance from "./images/flow2.png";
import deliver from "./images/flow4.png";
import arrow1 from "./images/arrow1.png";

export const Cars = () => {
  return (
    <>
      {/* How can we help section */}
      <section className="section">
        <div className="container">
          <hr></hr>
          <h1 className="title is-2 p-3 has-text-centered is-2 title-edit">
            How It Works
          </h1>

          <div className="columns column-gap">
            <div className="column has-text-centered mb-3 ">
              <div className="">
                <div className="card-content">
                  <div className="content">
                    <p className="title title-edit">Find your car</p>
                  </div>
                  <div className="card-image is-justify-content-center is-flex">
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
                    <p className="title title-edit">Apply for your finance</p>
                  </div>
                  <div className="card-image is-justify-content-center is-flex">
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
                    <p className="title title-edit">Take Delivery</p>
                  </div>
                  <div className="card-image is-justify-content-center is-flex">
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
