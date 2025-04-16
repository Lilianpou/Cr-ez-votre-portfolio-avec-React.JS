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
        <nav
          id="navbar"
          class="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        >
          <div id="navbar-logo" class="container-fluid">
            <span class="navbar-brand">JOHN DOE</span>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#navbarOffcanvasLg"
            aria-controls="navbarOffcanvasLg"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="navbarOffcanvasLg"
            aria-labelledby="navbarOffcanvasLgLabel"
          >
            <ul class="navbar-nav">
              <li lass="nav-item">
                <a href="/home" class="navbar-brand">
                  HOME
                </a>
              </li>
              <li lass="nav-item">
                <a href="/services" class="nav-link active">
                  SERVICES
                </a>
              </li>
              <li lass="nav-item">
                <a href="/portfolio" class="nav-link active">
                  PORTFOLIO
                </a>
              </li>
              <li lass="nav-item">
                <a href="/contact" class="nav-link active">
                  CONTACT
                </a>
              </li>
              <li lass="nav-item" id="mentions">
                <a href="/legal" class="nav-link active">
                  MENTIONS LÉGALES
                </a>
              </li>
            </ul>
          </div>
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
