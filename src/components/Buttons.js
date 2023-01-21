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
      <a href="tel:+01908 032694" className="button-stick">
        CALL
      </a>
      <a href="#scroll-to-contact" className="button-stick">
        GET A QUOTE
      </a>
    </div>
  );
};
