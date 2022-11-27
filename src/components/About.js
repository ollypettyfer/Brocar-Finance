import React from "react";

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

      <div className="image is-5by3">
        <img
          alt="car"
          src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        ></img>
      </div>
    </>
  );
};
