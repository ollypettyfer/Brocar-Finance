import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/common/Home";
import { Navbar } from "./components/common/Navbar";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Finance } from "./components/Finance";
import { Cars } from "./components/Cars";
import { Complaints } from "./components/documentation/Complaints";
import { Fluent } from "./components/Fluent";
import { CookiePolicy } from "./components/documentation/CookiePolicy";
import { PrivacyPolicy } from "./components/documentation/PrivacyPolicy";
import { Modal2 } from "./components/common/Modal2";
import { TermsOfBusiness } from "./components/documentation/TermsOfBusiness";
import { Disclosure } from "./components/documentation/Disclosure";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fluent" element={<Fluent />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/finance-options" element={<Finance />}></Route>
          <Route path="/car-types" element={<Cars />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/complaints" element={<Complaints />}></Route>
          <Route path="/cookies" element={<CookiePolicy />}></Route>
          <Route path="/privacy" element={<PrivacyPolicy />}></Route>
          <Route path="/termsofbusiness" element={<TermsOfBusiness />}></Route>
          <Route path="/disclosure" element={<Disclosure />}></Route>
          <Route path="/modal2" element={<Modal2 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
