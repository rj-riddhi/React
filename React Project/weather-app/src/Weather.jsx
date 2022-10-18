import React, { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Weather = () => {
  const [data, setData] = useState(null);
  const [search, setSearch] = useState("Ahmedabad");
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d86deb0cb24a5ab7fbbdfd69360838eb&units=metric`;
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData.main);
    };
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="main-div">
            <div className="row mx-auto ">
              <input
                type="search"
                className="col-4 mx-auto input-div"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value = {search}
              />
            </div>
            {!data ? (
               
                 search !== '' ?
                  <div
                    className="spinner-border text-secondary m-5 "
                    role="status"
                  >
                  </div> : <p className="mt-5">Search Something</p>
                
            ) : (
              <div className="information">
                <h1>
                  <i
                    className="fa fa-street-view street-icon"
                    aria-hidden="true"
                  ></i>
                  {search}
                </h1>
                <h2>{data.temp}°Cel</h2>
                <h3>
                  Min : {data.temp_min}°Cel | Max : {data.temp_max}
                  °Cel
                </h3>
              </div>
            )}

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
