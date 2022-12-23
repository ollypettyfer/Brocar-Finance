import React from "react";
import fb from "./images/fb.png";
import insta from "./images/insta.png";

export const Contact = () => {
  return (
    <>
      {/* column 1 */}
      <section
        className="form-bg has-text-black section"
        id="scroll-to-contact"
      >
        <div className="has-background-white-ter">
          <div className="columns">
            <div className="column">
              <form
                className="p-6"
                action="https://formsubmit.co/7b309fbcb1545a589984079739d143c1"
                method="POST"
              >
                <h1 className="title is-3 has-text-centered has-text-black">
                  Send an enquiry
                </h1>
                <div className="field">
                  <label className="label contact-label">Name</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      required
                    ></input>
                  </div>
                </div>

                <div className="field">
                  <label className="label contact-label">Contact Number</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input "
                      type="text"
                      name="number"
                      required
                    ></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-check"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label contact-label">Email</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      required
                    ></input>
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                      <i className="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                </div>

                <div className="field">
                  <label className="label contact-label">
                    How can we help?
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      placeholder="What would you like to talk to us about today?"
                      type="text"
                      name="message"
                      required
                    ></input>
                  </div>
                </div>

                <div className="field is-grouped is-justify-content-center">
                  <div className="control">
                    <button className="button is-primary has-text-black ">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <hr className="hr"></hr>

            {/* column 2 */}
            <div className="column has-text-centered">
              <h1 className="title is-3 has-text-black">Get in touch</h1>
              <br></br>

              <div className="field">
                <label className="label contact-label">CALL NOW</label>

                <h2 className="">07496555110</h2>
              </div>

              <div className="field">
                <label className="label contact-label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <a
                    href="mailto:enquires@brocarfinance.co.uk"
                    className=" g-hover"
                  >
                    enquiries@brocarfinance.co.uk
                  </a>
                </div>
              </div>

              <div className="field">
                <label className="label contact-label">OPENING HOURS</label>
                <h2>Mon-Fri</h2>
                <p>09:00-1700</p>
                <h2>Sat</h2>
                <p>09:00-1300</p>
              </div>
              <div className="field">
                <label className="label contact-label">Address</label>
                <p>
                  Regus House, Fairbourne Drive, <br></br>Atterbury, Milton
                  Keynes<br></br> MK10 9RG
                </p>
              </div>
              <div className="field">
                <img src={fb} alt="insta icon" className="pr-1"></img>
                <img src={insta} alt="facebook icon"></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
