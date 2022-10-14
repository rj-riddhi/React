import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
    return (
        <>
            <div className="row d-flex align-items-center">
            <div className="col-md-6 order-2 order-lg-1 pt-5 pt-lg-0 d-flex  flex-column">
                <h1 > {props.info} <br />
                <strong className="brand">TechRiddhi</strong></h1>
                <h2 className="my-3"> we are the team of talented developer making website</h2>
                <div className="mt-3">
                    <NavLink className="btn-get-started" to = {props.path}> {props.btn}</NavLink>
                </div>
            </div>

            <div className="col-md-6 order-1 order-lg-2 pt-5 pt-lg-0 pe-0 pl-3 align-self-end">
                <img src={props.imgsrc}  alt="development team" className="img-fluid animated"/>
            </div>
          </div>
        </>
    )
}
export default Common;