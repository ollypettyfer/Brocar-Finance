import React from "react";
import { Trustapilot } from "../Trustapilot";
import { Contact } from "../Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { About } from "../About";
import { Finance } from "../Finance";
import { Cars } from "../Cars";
import { Element } from "react-scroll";
import { useStateContext } from "../context/ContextProvider";
import { Buttons } from "../Buttons";
import { Modal2 } from "./Modal2";

export const Home = () => {
  const { setHomeLink } = useStateContext();

  setHomeLink(false);
  return (
    <>
      <Hero />
      <Modal2 />

      <About />

      {/*TRUSTAPILOT WIDGET*/}
      <Trustapilot />

      {/* How can we help section */}
      <Element id="cars-section">
        <Cars />
      </Element>

      {/* Finace Options */}
      <Element id="finance-section">
        <Finance />
      </Element>

      {/*CONTACT*/}
      <Element id="contact">
        <Contact />
      </Element>
      <Footer />
      <Buttons />
    </>
  );
};
