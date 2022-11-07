import React from "react";
import { Trustapilot } from "../Trustapilot";
import { Contact } from "../Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { About } from "../About";
import { Finance } from "../Finance";
import { Cars } from "../Cars";
import { Element } from "react-scroll";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />

      {/* How can we help section */}
      <Element id="cars-section">
        <Cars />
      </Element>

      {/* Finace Options */}
      <Element id="finance-section">
        <Finance />
      </Element>

      {/*TRUSTAPILOT WIDGET*/}
      <Trustapilot />

      {/*CONTACT*/}
      <Element id="contact" name="contact">
        <Contact />
      </Element>

      <Footer />
    </>
  );
};
