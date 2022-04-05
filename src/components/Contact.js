import React from "react";

export const Contact = () => {
  return (
    <>
      {/* column 1 */}
      <div class="columns">
        <div class="column is-offset-2">
          <form
            action="https://formsubmit.co/7b309fbcb1545a589984079739d143c1"
            method="POST"
          >
            <div className="field">
              <label className="label">Name</label>
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
              <label className="label">Contact Number</label>
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
              <label className="label">Email</label>
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
              <label className="label">Message</label>
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

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>

        {/* column 2 */}
        <div class="column is-offset-2">
          <div className="field">
            <label className="label">GET IN TOUCH</label>
          </div>

          <div className="field">
            <label className="label">CALL NOW</label>

            <h2 className="">07496555110</h2>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <p>BROCARFINACE@GMAIL.COM</p>
            </div>
          </div>

          <div className="field">
            <label className="label">OPENING HOURS</label>
            <h2>Mon-Fri</h2>
            <p>09:00-1700</p>
            <h2>Sat</h2>
            <p>09:00-1300</p>
          </div>
        </div>
      </div>
    </>
  );
};
