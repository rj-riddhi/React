import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () =>{

    return (
        <>
            <NavLink exact='true'  to="/"  
            style={({ isActive }) => ({ color: isActive ? 'red' : '',})}>Home</NavLink>
            <NavLink exact='true' to="/about"  
            style={({ isActive }) => ({ color: isActive ? 'red' : '',})}>About</NavLink>
            <NavLink exact='true' to="/contact"
            style={({ isActive }) => ({ color: isActive ? 'red' : '',})}>Contact</NavLink>
        </>
      )
    };
export default Navbar;