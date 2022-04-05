import React from "react";
import { Trustapilot } from "../Trustapilot";
import { Contact } from "../Contact";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title ">Fullheight hero</p>
            <p className="subtitle">Fullheight subtitle</p>
          </div>
        </div>
      </section>
      <section className="section is-medium">
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
            <h1 className="title p-6">ABOUT US</h1>
            <p className="subtitle pb-6">
              Holmesdale Finance delivers expert advice to customers choosing
              prestige, classic, rare and high value vehicles. By helping our
              clients to find the best finance solutions, specifically targeted
              to their unique requirements we provide value and choice
              unrivalled by forecourt dealerships. We pride ourselves on a
              clear, efficient and friendly service, designed to provide the
              solution you need quickly and efficiently.
            </p>
            <button className="button">Contact Us</button>
          </div>
        </div>
      </section>

      {/* How can we help section */}

      <section className="section is-medium">
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
            <h1 className="title p-6">HOW WE CAN HELP</h1>
            <p className="subtitle pb-6">
              Years of industry experience combine to deliver our clients
              essential benefits.
            </p>

            <div className="columns">
              <div className="column">
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img src="../images/logo.jpg" alt="KAREL"></img>
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">FLEXIBLE PACKAGES</p>
                      </div>
                    </div>

                    <div class="content">
                      We can fund balances up to £10m. On certain models we can
                      offer balloon payments of up to 70% on two year deals
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                {" "}
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img src="../images/logo.jpg" alt="KAREL"></img>
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">MONEY SAVINGS</p>
                      </div>
                    </div>

                    <div class="content">
                      Our panel of lenders can help us to provide you with a
                      lower cost funding solution than might be available
                      through a dealership
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                {" "}
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media-left">
                        <figure class="image is-48x48">
                          <img src="../images/logo.jpg" alt="KAREL"></img>
                        </figure>
                      </div>
                      <div class="media-content">
                        <p class="title is-4">PRACTICAL SOLUTIONS</p>
                      </div>
                    </div>

                    <div class="content">
                      We can re-finance or re-structure an existing agreement
                      including equity release and negative equity financing.
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Finace Options */}
      <section className="section is-medium">
        <div className="columns is-mobile">
          <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
            <h1 className="title p-6">OUR FLEXIBLE FINANCE OPTIONS</h1>
            <p className="subtitle pb-6">
              Automotive finance can seem complicated. There are a few key
              products designed to suit different buying needs. We can help you
              to understand the options available. Please refer to Finance
              Suitability Questions for further information
            </p>

            <div className="columns">
              <div className="column">
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media">
                        <figure class="image is-3by1">
                          <img src="../images/logo.jpg" alt="KAREL"></img>
                        </figure>
                      </div>
                    </div>
                    <div class="content">
                      <p class="title is-4">PERSONAL CONTRACT PURCHASE</p>
                    </div>
                    <div class="content">
                      An increasingly popular choice. PCP offers flexibility at
                      the end of your agreement along with low monthly payments
                      and can be the right option when opting out of a company
                      car scheme.
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                {" "}
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media">
                        <figure class="image is-3by1">
                          <img src="../images/logo.jpg" alt="KAREL"></img>
                        </figure>
                      </div>
                    </div>
                    <div class="content">
                      <p class="title is-4">HIRE PURCHASE</p>
                    </div>

                    <div class="content">
                      Hire Purchase (HP) is a simple and straightforward way to
                      finance your new vehicle. A fixed rate of interest along
                      with fixed monthly payments ensure budgeting is easy and
                      predictable
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                {" "}
                <div class="card">
                  <div class="card-content">
                    <div class="media">
                      <div class="media">
                        <figure class="image is-3by1">
                          <img src="../images/logo.jpg" alt="KAREL"></img>
                        </figure>
                      </div>
                    </div>
                    <div class="content">
                      <p class="title is-4">LEASE PURCHASE</p>
                    </div>
                    <div class="content">
                      A similar option to Hire Purchase, but with a final
                      balloon payment at the end of the agreement. This can be
                      the right choice where you want to keep monthly payments
                      to a minimum.
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*TRUSTAPILOT WIDGET*/}
      <Trustapilot />

      {/*CONTACT*/}

      <Contact />
      <Footer />
    </>
  );
};
