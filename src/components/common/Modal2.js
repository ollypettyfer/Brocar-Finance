import React, { useState } from "react";
// import { submitForm } from "../../Lib/axios";

export const Modal2 = () => {
  const axios = require("axios");
  const [data, setData] = useState({
    formData: {
      AmountToBorrow: "",
      Term: "",
      FinanceDetails: {
        FinanceTypeId: "",
      },
      Vehicles: [
        {
          Make: "",
        },
      ],
      Applicants: [
        {
          Email: "",
          Forename: "",
          Surname: "",
          Mobile: "",
        },
      ],
    },
  });

  const handleInput = (event) => {
    const formData = { ...data.formData };
    formData[event.target.name] = event.target.value;
    setData({ formData });

    console.log(formData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let config = {
      method: "post",
      url: "https://api.autoconvert.co.uk/application/submit",
      headers: {
        "X-ApiKey": "9c640c61-d1a7-4de6-8d68-53939b939231",
        key: "9c640c61-d1a7-4de6-8d68-53939b939231",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .post(
    //     url,
    //     {

    // AmountToBorrow: data.formData.AmountToBorrow,
    // Term: data.formData.Term,
    // FinanceDetails: {
    //   FinanceTypeId: data.formData.FinanceTypeId,
    // },
    // Vehicles: [
    //   {
    //     Make: data.formData.Vehicles.Make,
    //   },
    // ],
    // Applicants: [
    //   {
    //     Email: data.formData.Applicants.Email,
    //     Forename: data.formData.Applicants.Forename,
    //     Surname: data.formData.Applicants.Surname,
    //     Mobile: data.formData.Applicants.Mobile,
    //   },
    // ],
    //   },
    //   {
    //
    //   }
    // )
    // .then((res) => {
    //   console.log(res.data);
    // });
  };

  // MAKE MODEL WORK/POPUP

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
            // action="https://formsubmit.co/1995064511345de11db5569c71841467"
            // method="POST"
            onSubmit={handleSubmit}
          >
            <div className="columns is-8">
              <div className="column">
                <div className="field">
                  <label className="label m-content">First Name</label>
                  <div className="control">
                    <input
                      className="input m-input is-focused"
                      type="text"
                      name="[Applicants][0]Forename"
                      value={data.formData.Applicants.Forename}
                      onChange={handleInput}
                    ></input>
                  </div>
                </div>
                <br></br>
                <div className="field">
                  <label className="label m-content">Surname</label>
                  <div className="control">
                    <input
                      className="input m-input is-focused"
                      type="text"
                      name="Surname"
                      value={data.formData.Applicants.Surname}
                      onChange={handleInput}
                    ></input>
                  </div>
                </div>
                <br></br>
                <div className="field">
                  <label className="label m-content">Contact Number</label>
                  <div className="control">
                    <input
                      className="input m-input"
                      type="text"
                      name="Mobile"
                      value={data.formData.Applicants.Mobile}
                      onChange={handleInput}
                    ></input>
                  </div>
                  <br></br>
                </div>
                <div className="field">
                  <label className="label m-content">Email Address</label>
                  <div className="control">
                    <input
                      className="input m-input"
                      type="text"
                      name="Email"
                      value={data.formData.Applicants.Email}
                      onChange={handleInput}
                    ></input>
                  </div>
                </div>
                <br></br>
                <div className="field">
                  <label className="label m-content">Amount Required</label>
                  <div className="control">
                    <input
                      className="input m-input"
                      type="text"
                      name="AmountToBorrow"
                      value={data.formData.AmountToBorrow}
                      onChange={handleInput}
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
                  <div className="control">
                    <input
                      className="input m-input"
                      type="text"
                      name="Make"
                      value={data.formData.Vehicles.Make}
                      onChange={handleInput}
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
                      <select
                        className="dd-s"
                        name="FinanceTypeId"
                        value={data.formData.FinanceDetails.FinanceTypeId}
                        onChange={handleInput}
                      >
                        <option className="dd-s">Please Select</option>
                        <option value={2}>Personal Contract Purchase</option>
                        <option value={1}>Hire Purchase</option>
                        <option value={3}>Lease Purchase</option>
                        <option value={6}>I’m not sure</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br></br>
                <div className="field">
                  <label className="label m-content">Finance Term</label>
                  <div className="control m-input">
                    <div className="select is-fullwidth">
                      <select
                        className="dd-s"
                        name="Term"
                        value={data.formData.Term}
                        onChange={handleInput}
                      >
                        <option className="dd-s">Please Select</option>
                        <option value={24}>24</option>
                        <option value={36}>36</option>
                        <option value={48}>48</option>
                        <option value={60}>60</option>
                      </select>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
            <div className="modal-btn">
              <button
                className="button btn-sty has-text-white"
                type="submit"
                value="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close"></button>
    </div>
  );
};
