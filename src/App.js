import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/common/Home";
import { Navbar } from "./components/common/Navbar";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Finance } from "./components/Finance";
import { Cars } from "./components/Cars";
import Sum from "./components/Special/Sum";

function App() {
  return (
    <>
      {/* <div style={wrapper_styles}>
        <button onClick={() => setIsOpen(true)} className="button is-link">
          OPEN MODAL
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">GET A QUOTE</p>
            </header>
            <section class="modal-card-body">CONTENT</section>
            <footer class="modal-card-foot">
              <button class="button is-success">Submit</button>
            </footer>
          </div>
        </Modal>
      </div> */}

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/finance-options" element={<Finance />}></Route>
          <Route path="/car-types" element={<Cars />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sum" element={<Sum />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
