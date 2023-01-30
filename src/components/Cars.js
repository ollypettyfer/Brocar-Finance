import React from "react";
import arrow from "./images/arrow.d1.png";
import arrowm from "./images/arrow.m1.png";

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
