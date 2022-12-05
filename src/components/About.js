import React from "react";
import Facebook from "./images/Facebook.jpg";

export const About = () => {
  return (
    <>
      <section className="section is-large">
        <div className="columns is-mobile">
          <div className="column  has-text-centered">
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

            <a href="#scroll-to-contact">
              <button className="button">Contact Us</button>
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
