import React from "react";
// import find from "./images/flow1.png";
// import finance from "./images/flow2.png";
// import deliver from "./images/flow4.png";
import arrow from "./images/arrow.d1.png";
import arrowm from "./images/arrow-m.png";

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

          {/* <div className="columns column-gap">
            <div className="column has-text-centered ">
              <div className="card-content">
                <div className="card-image is-justify-content-center is-flex">
                  <figure className="image is-128x128">
                    <img src={find} alt="car"></img>
                  </figure>
                </div>
              </div>
            </div>

            <div className="column has-text-centered">
              <div className="card-content">
                <div className="card-image is-justify-content-center is-flex">
                  <figure className="image is-128x128 ">
                    <img src={finance} alt="car"></img>
                  </figure>
                </div>
              </div>
            </div>
            <div className="column has-text-centered ">
              <div className="card-content">
                <div className="card-image is-justify-content-center is-flex">
                  <figure className="image is-128x128 ">
                    <img src={deliver} alt="car"></img>
                  </figure>
                </div>
              </div>
            </div>
          </div> */}
          <div className="arrow-d mt-6">
            <img src={arrow} alt=""></img>
          </div>
          <div className=" arrow-m is-flex is-justify-content-center">
            <img src={arrowm} alt=""></img>
          </div>

          <div className="has-text-centered">
            <div
              data-target="modal-js-example"
              className=" button btn-sty is-large has-text-white  js-modal-trigger mt-6"
            >
              GET A QUOTE
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
