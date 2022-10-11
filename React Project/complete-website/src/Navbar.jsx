import React from "react";
import {Routes, Route, NavLink} from 'react-router-dom'
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './Contact';
function Navbar() {
  return (
    <>
        <Routes>
            <Route path='/' element=<Home />/>
            <Route path='/services' element=<Services />/>
            <Route path='/about' element=<About />/>
            <Route path='/contact' element=<Contact />/>
            <Route path= '*' element=<Home /> />
        </Routes>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/services'>Services</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        
    </>
  );
}

export default Navbar;
