import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";
const Navbar = () =>{

    return (
        <>
        <div className="row menu_style">
            <NavLink className="col-md-auto col-sm-6" exact='true'  to="/"  
            style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>Home</NavLink>
            <NavLink className="col-md-auto col-sm-6" exact='true' to="/about"  
            style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>About</NavLink>
            <NavLink className="col-md-auto col-sm-6" exact='true' to="/contact"
            style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>Contact</NavLink>
            <NavLink className="col-md-auto col-sm-6" exact='false' to="/user/name/lname"
             style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>User</NavLink>
            <NavLink className="col-md-auto col-sm-6" exact='true' to="/user/city"
             style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>Location</NavLink>
            <NavLink className="col-md-auto col-sm-6" exact='true' to="/search"
             style={({ isActive }) => ({ color: isActive ? '#ffffff' : '#61dafb',backgroundColor:'#20232a', fontWeight: 'bolder', textDecoration: 'none'})}>Search</NavLink>
        </div>
        </>
      )
    };
export default Navbar;