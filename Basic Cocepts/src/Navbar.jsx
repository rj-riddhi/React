import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () =>{

    return (
        <>
        <div className="menu_style">
            <NavLink exact='true'  to="/"  
            style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>Home</NavLink>
            <NavLink exact='true' to="/about"  
            style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>About</NavLink>
            <NavLink exact='true' to="/contact"
            style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>Contact</NavLink>
            <NavLink exact='false' to="/user/name/lname"
             style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>User</NavLink>
            <NavLink exact='false' to="/user/city"
             style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>Location</NavLink>
        </div>
        </>
      )
    };
export default Navbar;