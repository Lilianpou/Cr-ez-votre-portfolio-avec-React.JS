import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./style/NavBar.css";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import Services from "./pages/Services";
import Portfolio from "./pages/Portefolio";

class App extends React.Component {
  render() {
    return (
      <body>
        <nav className="navbar">
          <div className="navbar-logo">JOHN DOE</div>
          <ul className="navbar-menu">
            <li>
              <a href="/home">HOME</a>
            </li>
            <li>
              <a href="/services">SERVICES</a>
            </li>
            <li>
              <a href="/portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
            <li>
              <a href="/legal">MENTIONS LÉGALES</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/legal" element={<Legal />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
        </Routes>
      </body>
    );
  }
}

export default App;
