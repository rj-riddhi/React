import React from "react";
import web from './Images/about.jpg'
import Common from "./Common";
const About = () => {
    return (
        <>
        <div id="header">
        <div className="container-fluid my-5">
          <div className="row pt-5">
            <div className="col-10 mx-auto p-0">
                <Common 
                    info= "Welcome to About page" 
                    imgsrc= {web}
                    path= "/contact"
                    btn= "Contacrt Now"
                    />
            </div>
          </div>
        </div>
        </div>
        </>
    )
}
export default About;