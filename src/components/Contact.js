import React from "react";
import fb from "./images/facen.png";
import insta from "./images/instan.png";
import linkedin from "./images/linked.png";

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
                action="https://formsubmit.co/1995064511345de11db5569c71841467"
                method="POST"
              >
                <h1 className="title is-3 has-text-centered  title-edit">
                  Speak to the team
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
                  <input
                    className="input "
                    type="text"
                    name="number"
                    required
                  ></input>
                </div>

                <div className="field">
                  <label className="label contact-label">Email</label>

                  <input
                    className="input"
                    type="email"
                    name="email"
                    required
                  ></input>
                </div>

                <div className="field">
                  <label className="label contact-label">
                    How can we help?
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Get a quote? More infomation? How much can I borrow?"
                      type="text"
                      name="message"
                      required
                    ></input>
                  </div>
                </div>

                <div className="field is-grouped is-justify-content-center">
                  <div className="control">
                    <button className="button btn-sty has-text-white ">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <hr className="hr"></hr>

            {/* column 2 */}
            <div className="column has-text-centered">
              <h1 className="title is-3 title-edit contact-t">Get in touch</h1>
              <br></br>

              <div className="field">
                <label className="label contact-label">CALL NOW</label>

                <a href="tel:+01908 032694" className=" g-hover">
                  01908 032694
                </a>
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
                <h2>Monday - Friday</h2>
                <p>08:30-1800</p>
                <h2>Saturday</h2>
                <p>09:00-1600</p>
              </div>
              <div className="field">
                <label className="label contact-label">Address</label>
                <p>
                  <a
                    href="https://goo.gl/maps/z7o1G7hHTHWWDEj37"
                    className="has-text-black g-hover"
                  >
                    Regus House, Fairbourne Drive, <br></br>Atterbury, Milton
                    Keynes<br></br> MK10 9RG
                  </a>
                </p>
              </div>
              <div className="field">
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fb} alt="insta icon" className="pr-1"></img>
                </a>
                <a
                  href="https://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={insta} alt="facebook icon"></img>
                </a>
                <a
                  href="https://www.linkedin.com/company/brocar-finance-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    id="linked-icon"
                    src={linkedin}
                    alt="facebook icon"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
