import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 col-10 mx-auto">
                  <div className="card h-100">
                    <img src={props.img} className="card-img-top" style={{height:'400px'}} alt="..." />
                    <div className="card-body ">
                      <h5 className="card-title">{props.title}</h5>
                      <p className="card-text">
                        {props.content}
                      </p>
                      <NavLink
                        to="/contact"
                        className="btn btn-outline-secondary"
                      >
                        Contact Now
                      </NavLink>
                    </div>
                  </div>
                </div>
        </>
    )
}
export default Card;