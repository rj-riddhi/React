import React from "react";
import { ser_arr } from './Api';
import Card from './Card'
const Services = () => {
  return (
    <>
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
          </div>
          <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
              {
                ser_arr.map((val,index) => {
                    return(
                        <Card 
                            key = {index}
                            title = {val.title}
                            img = {val.img}
                            content = {val.content}
                            link = {val.link}
                        />
                    )
                })
              }
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default Services;
