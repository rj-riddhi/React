import React from "react";
import web from './Images/home.jpg'
import Common from "./Common";
const Home = () => {
    return (
      <>
      <div id="header">
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto p-0">
                <Common 
                    info= "Grow Your business with" 
                    imgsrc= {web}
                    path= "/services"
                    btn= "Get Started"
                    />
            </div>
          </div>
        </div>
        </div>
      </>
    );
}
export default Home;