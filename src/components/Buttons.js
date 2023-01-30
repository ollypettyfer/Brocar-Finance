import React from "react";

export const Buttons = () => {
  //   window.onscroll = function () {
  //     scrollFunction2();
  //   };

  //   function scrollFunction2() {
  //     if (
  //       document.body.scrollTop > 20 ||
  //       document.documentElement.scrollTop > 20
  //     ) {
  //       document.getElementById("con-buttons").style.bottom = "0px";
  //     } else {
  //       document.getElementById("con-buttons").style.bottom = "-40px";
  //     }
  //   }
  return (
    <div className="is-flex m-btn" id="con-buttons">
      <a href="tel:+441908 032694" className="button-stick">
        CALL
      </a>
      <div
        data-target="modal-js-example"
        className="button-stick js-modal-trigger"
      >
        GET A QUOTE
      </div>
    </div>
  );
};
