import React from "react";
import { NavLink } from "react-router-dom";
const Error = () =>{
   return(
        <>
       <h1>404 Error Page </h1>
            <NavLink className="col-md-auto col-sm-6 text-decoration-none text-info" exact='true'  to="/">👈 Back</NavLink>
            
        </>
    )
}
export default Error;