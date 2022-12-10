import React from "react";

export const Cars = () => {
  return (
    <>
      {/* How can we help section */}

      <section className="section">
        <div className="container">
          <h1 className="title p-6 has-text-centered">HOW IT WORKS</h1>
          <p className="subtitle pb-6 has-text-centered">
            Years of industry experience combine to deliver our clients
            essential benefits.
          </p>
          <div className="columns">
            <div className="column has-text-centered">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <p className="title is-4">Find your car</p>
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
            <div className="column has-text-centered">
              {" "}
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <p className="title is-4"> Apply for your finance</p>
                  </div>

                  <div className="content">
                    Once we have tailored your finance solution, the next step
                    is to apply to the selected lender for a quick decision.
                    <br></br>
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className="column has-text-centered">
              {" "}
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <p className="title is-4">Take Delivery</p>
                  </div>

                  <div className="content">
                    Upon approval, we pay the dealer, you take delivery of your
                    vehicle. It really is that simple!
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
