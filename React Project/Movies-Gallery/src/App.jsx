import React from "react";
import Card from "./Cards";
import info from "./FilmInfo";

function App(){
    return (
        <React.StrictMode>
    <h1 className="heading_style"> Top Five Amazon prime videos</h1>
    {info.map((val) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          description={val.description}
          link={val.link}
        />
      );
    })}
  </React.StrictMode>
    );
}
export default App;