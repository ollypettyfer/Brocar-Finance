import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/common/Home";
import { Navbar } from "./components/common/Navbar";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Finance } from "./components/Finance";
import { Cars } from "./components/Cars";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/finance-options" element={<Finance />}></Route>
        <Route path="/car-types" element={<Cars />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
