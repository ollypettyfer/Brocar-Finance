import React from "react";

export const Cars = () => {
  return (
    <>
      {/* How can we help section */}

      <section className="section is-medium">
        <h1 className="title p-6 has-text-centered">HOW WE CAN HELP</h1>
        <p className="subtitle pb-6 has-text-centered">
          Years of industry experience combine to deliver our clients essential
          benefits.
        </p>
        <div className="columns ">
          <div className="column is-three-fifths is-offset-one-fifth has-text-centered">
            <div className="columns">
              <div className="column">
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media">
                        <figure className="image is-3by1">
                          <img src="../images/logo.jpg" alt="KAREL"></img>
                        </figure>
                      </div>
                    </div>
                    <div className="content">
                      <p className="title is-4">FLEXIBLE PACKAGES</p>
                    </div>

                    <div className="content">
                      We can fund balances up to £10m. On certain models we can
                      offer balloon payments of up to 70% on two year deals
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                {" "}
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media">
                        <figure className="image is-3by1">
                          <img src="../images/logo.jpg" alt="KAREL"></img>
                        </figure>
                      </div>
                    </div>
                    <div className="content">
                      <p className="title is-4">MONEY SAVINGS</p>
                    </div>

                    <div className="content">
                      Our panel of lenders can help us to provide you with a
                      lower cost funding solution than might be available
                      through a dealership
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column">
                {" "}
                <div className="card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media">
                        <figure className="image is-3by1">
                          <img src="../images/logo.jpg" alt="KAREL"></img>
                        </figure>
                      </div>
                    </div>
                    <div className="content">
                      <p className="title is-4">PRACTICAL SOLUTIONS</p>
                    </div>

                    <div className="content">
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
    </>
  );
};
