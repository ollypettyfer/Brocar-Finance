import React from "react";
import { Fluent } from "./Fluent";
import tick from "./images/tick1.png";

export const About = () => {
  return (
    <>
      <section className="section about-section">
        <div className="container">
          <hr></hr>
          <h2 className="title is-size-2 has-text-centered title-edit">
            About Us
          </h2>
          <Fluent />
          <h2 className="title is-size-3 p-6 has-text-centered title-edit">
            Why Brocar?
          </h2>
          <div className="columns ">
            <div className="column is-one-third">
              <div className="card card-ht about-shadow">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={tick} alt=""></img>
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">Save Time and Effort</p>
                    </div>
                  </div>
                  <div className="content">
                    We will take the hard work of analysing the market of car
                    finance out of your hands, by comparing our selected panel
                    of lenders to find you a cheaper finance solution than what
                    may be available from the dealership.
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card card-ht about-shadow">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={tick} alt=""></img>
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">
                        Professional Customer Service
                      </p>
                    </div>
                  </div>
                  <div className="content">
                    Your dedicated account manager will be knowledgable,
                    diligent and efficient whilst presenting information to you
                    in an easy to understand and friendly manner.
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card card-ht about-shadow">
                <div className="card-content ">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={tick} alt=""></img>
                      </figure>
                    </div>
                    <div className="media-content">
                      <p className="title is-4">In Safe Hands</p>
                    </div>
                  </div>
                  <div className="content">
                    Years of industry experience combine to deliver our clients
                    essential benefits.
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container has-text-centered">
            <a href="#scroll-to-contact">
              <button className="button btn-sty is-large has-text-white ">
                Get a quote
              </button>
            </a>
          </div>
          <hr></hr>
        </div>
      </section>

      {/* <div className="image is-3by1">
        <img alt="car" src={Facebook}></img>
      </div> */}
    </>
  );
};
