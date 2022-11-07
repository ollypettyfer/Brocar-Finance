import React from "react";

export const Finance = () => {
  return (
    <section className="section is-medium">
      <h1 className="title p-6 has-text-centered">
        OUR FLEXIBLE FINANCE OPTIONS
      </h1>
      <p className="subtitle pb-6 has-text-centered">
        Automotive finance can seem complicated. There are a few key products
        designed to suit different buying needs. We can help you to understand
        the options available. Please refer to Finance Suitability Questions for
        further information
      </p>
      <div className="columns ">
        <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
          <div className="columns">
            <div className="column">
              <div className="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80"
                      alt="Placeholder"
                    ></img>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p className="title is-4">PERSONAL CONTRACT PURCHASE</p>
                  </div>
                  <div className="content">
                    An increasingly popular choice. PCP offers flexibility at
                    the end of your agreement along with low monthly payments
                    and can be the right option when opting out of a company car
                    scheme.
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              {" "}
              <div className="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80"
                      alt="Placeholder"
                    ></img>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p className="title is-4">HIRE PURCHASE</p>
                  </div>

                  <div className="content">
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
              <div className="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80"
                      alt="Placeholder"
                    ></img>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <p className="title is-4">LEASE PURCHASE</p>
                  </div>
                  <div className="content">
                    A similar option to Hire Purchase, but with a final balloon
                    payment at the end of the agreement. This can be the right
                    choice where you want to keep monthly payments to a minimum.
                    <br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
