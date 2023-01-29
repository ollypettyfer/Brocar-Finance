import React from "react";

export const Modal2 = () => {
  document.addEventListener("DOMContentLoaded", () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add("is-active");
    }

    function closeModal($el) {
      $el.classList.remove("is-active");
    }

    function closeAllModals() {
      (document.querySelectorAll(".modal") || []).forEach(($modal) => {
        closeModal($modal);
      });
    }

    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll(".js-modal-trigger") || []).forEach(
      ($trigger) => {
        const modal = $trigger.dataset.target;
        const $target = document.getElementById(modal);

        $trigger.addEventListener("click", () => {
          openModal($target);
        });
      }
    );

    // Add a click event on various child elements to close the parent modal
    (
      document.querySelectorAll(
        ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
      ) || []
    ).forEach(($close) => {
      const $target = $close.closest(".modal");

      $close.addEventListener("click", () => {
        closeModal($target);
      });
    });

    // Add a keyboard event to close all modals
    document.addEventListener("keydown", (event) => {
      const e = event || window.event;

      if (e.keyCode === 27) {
        // Escape key
        closeAllModals();
      }
    });
  });
  return (
    <div id="modal-js-example" className="modal">
      <div className="modal-background"></div>

      <div className="modal-content">
        <div className="box">
          <h2 className="title has-text-centered m-content">
            It All Starts With A Quote…
          </h2>
          <br></br>
          <h4 className="subtitle has-text-centered m-content">
            We’re just a few quick clicks away from our experienced sales team
            helping your dream purchase become a reality.
          </h4>
          <br></br>
          <form
            action="https://formsubmit.co/1995064511345de11db5569c71841467"
            method="POST"
          >
            <div className="columns is-8">
              <div className="column">
                <div className="field">
                  <label className="label m-content">Full Name</label>
                  <div class="control">
                    <input
                      class="input m-input"
                      type="text"
                      name="Name"
                    ></input>
                  </div>
                </div>
                <br></br>
                <div className="field">
                  <label className="label m-content">Contact Number</label>
                  <div class="control">
                    <input
                      class="input m-input"
                      type="text"
                      name="Number"
                    ></input>
                  </div>
                  <br></br>
                </div>
                <div className="field">
                  <label className="label m-content">Email Address</label>
                  <div class="control">
                    <input
                      class="input m-input"
                      type="text"
                      name="Email"
                    ></input>
                  </div>
                </div>
                <br></br>
                <div className="field">
                  <label className="label m-content">Amount Required</label>
                  <div class="control">
                    <input
                      class="input m-input"
                      type="text"
                      name="Amount"
                    ></input>
                  </div>
                </div>
                <br></br>
              </div>
              <div className="column">
                <div className="field">
                  <label className="label m-content">
                    Vehicle Make and Model
                  </label>
                  <div class="control">
                    <input
                      class="input m-input"
                      type="text"
                      name="Vehicle"
                    ></input>
                  </div>
                </div>
                <br></br>
                <div className="field">
                  <label className="label m-content">Buying Stage</label>
                  <div className="control m-input">
                    <div className="select is-fullwidth">
                      <select name="Buying-Stage">
                        <option className="dd-s">Please Select</option>
                        <option>I’m looking for a car</option>
                        <option>I’ve found a car</option>
                        <option>I’ve ordered my car</option>
                        <option>I would like to refinance my car</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="field">
                  <label className="label m-content">
                    Desired Finance Solution
                  </label>
                  <div className="control m-input">
                    <div className="select is-fullwidth">
                      <select className="dd-s" name="Finance-Type">
                        <option className="dd-s">Please Select</option>
                        <option>Personal Contract Purchase</option>
                        <option>Hire Purchase</option>
                        <option>Lease Purchase</option>
                        <option>I’m not sure</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="field">
                  <label className="label m-content">Finance Term</label>
                  <div class="control">
                    <input
                      class="input m-input"
                      type="text"
                      name="Term"
                    ></input>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
            <div className="modal-btn">
              <button className="button btn-sty has-text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};
