import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Weather = () => {

    const [data, setCity] = useState({
        city: 'Ahmedabad',
        tmp: '',
        min: '',
        max: ''
    });
    const getCity = (e) => {
        setCity({
         city: e.target.value
        })
    }
    useEffect(()=>{
        const fetchApi =async () => {
            const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data.city}?unitGroup=us&key=3CZAJAZK436ECGDS2FWH2TE6P&contentType=json`;
            const response =await fetch(url)
            const jsonData =await response.json();console.log(jsonData)
            setCity({
             city: jsonData.address,
            tmp: calcuis(jsonData.currentConditions.temp)
            });
        }
        fetchApi();
    },[getCity])

    const calcuis = (temp) => {
      return ((temp - 32) * 5/9);
    }
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          {/* <div className="main_div col-md-4 col-10  mx-auto"> */}
          <div className="main-div">
            <div className="row mx-auto ">
              <input type="search" className="col-4 mx-auto input-div" onChange={getCity}/>
            </div>
            <div className="information">
              <h1>
                <i className="fa fa-street-view street-icon" aria-hidden="true"></i> {data.city}
              </h1>
              <h2>{data.tmp}°Cel</h2>
              <h3>Min : {data.min}°Cel | Max : {data.max}°Cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Weather;
