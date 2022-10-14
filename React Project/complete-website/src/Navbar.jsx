import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import {Routes, Route, NavLink, Navigate} from 'react-router-dom'
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  TechRiddhi
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink end  className={({isActive}) => (isActive ?  "nav-link menu_active"  : "nav-link" )} to="/"> Home </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink end className={({isActive}) => (isActive ?  "nav-link menu_active"  : "nav-link" )} to='/services'> Services </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink end className={({isActive}) => (isActive ?  "nav-link menu_active"  : "nav-link" )} to='/about'> About </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink end className={({isActive}) => (isActive ?  "nav-link menu_active"  : "nav-link" )} to='/contact'> Contact  </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Routes>
        <Route exact path="/" element=<Home /> />
        <Route exact path="/services" element=<Services /> />
        <Route exact path="/about" element=<About /> />
        <Route exact path="/contact" element=<Contact /> />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Navbar;
