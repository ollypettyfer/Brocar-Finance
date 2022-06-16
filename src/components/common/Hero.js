import React from "react";

export const Hero = () => {
  return (
    <>
      {/* THIS NEEDS TO HAVE HERO IMG IN */}
      <section className="hero is-fullheight has-background">
        <img
          className="hero-background is-transparent "
          src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2025&q=80"
          alt="sports car"
        ></img>
        <div className="container is-fluid">
          <h1 className="hero-title title is-1">BROCAR FINACE</h1>
        </div>
      </section>
    </>
  );
};
