import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#9999",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export default function Modal({ open, children, onClose }) {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <div className="container modal-dim ">
          <div className=" has-background-dark has-text-white is-mobile">
            <form
              action="https://formsubmit.co/7b309fbcb1545a589984079739d143c1"
              method="POST"
            >
              <h1 className=" field title is-3 has-text-centered has-text-white">
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
                <div className="control">
                  <input
                    className="input "
                    type="text"
                    name="number"
                    required
                  ></input>
                </div>
              </div>

              <div className="field">
                <label className="label contact-label">Email</label>
                <div className="control ">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    required
                  ></input>
                </div>
              </div>

              <div className="field">
                <label className="label contact-label">Message</label>
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

              <div className="field has-text-centered pb-2">
                <div className="control">
                  <button className="button is-link is-centered">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="has-text-centered">
            <button
              onClick={onClose}
              className="button is-danger has-text-centered"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}
