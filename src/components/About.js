import React from "react";
import Facebook from "./images/Facebook.jpg";
import tick from "./images/tickupdate.png";

export const About = () => {
  return (
    <>
      <section className="section">
        <div className="container ">
          <h1 className="title is-size-2 p-6 has-text-centered title-edit">
            Why Brocar?
          </h1>
          <div className="columns about-gap ">
            <div className="column has-text-centered ">
              <div className="is-flex is-justify-content-center ">
                <div className="image is-48x48 mr-4">
                  <img src={tick} alt="car"></img>
                </div>
                <h2 className="subtitle is-size-3">Save Time and Effort</h2>
              </div>
              <p className="content pb-6">
                We will take the hard work of shopping the market of car finance
                out of your hands, by comparing our hand selected panel of
                lenders to find you a cheaper finance solution than what may be
                available from the dealership.
              </p>
            </div>
            <div className="column has-text-centered">
              <div className="is-flex is-justify-content-center ">
                <div className="image is-48x48 mr-4">
                  <img src={tick} alt="car"></img>
                </div>
                <h2 className="subtitle is-size-3">
                  Professional Customer Service
                </h2>
              </div>
              <p className="content pb-6">
                Your dedicated account manager will be knowledgable, diligent
                and efficient whilst presenting information to you in an easy to
                understand and friendly manner.
              </p>
            </div>
            {/* MAYBE ADD THIRD IF CONTENT COMES! */}
            {/* <div className="column">
            <h2 className="subtitle">Professional Customer Service</h2>
            <p className="content pb-6">
            Your dedicated account manager will be knowledgable, diligent and
            efficient whilst presenting information to you in an easy to
            understand and friendly manner.
            </p>
            </div> */}
          </div>
          <div className="container has-text-centered">
            <a href="#scroll-to-contact">
              <button className="button btn-sty is-large has-text-white ">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>

      <div className="image is-3by1">
        <img alt="car" src={Facebook}></img>
      </div>
    </>
  );
};
