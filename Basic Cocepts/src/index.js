// Babel converts modern javascript code to browser's understandable code

//using react
import React from "react";
import ReactDom from "react-dom";
import Challange1 from "./Challange_1";
import Challange2 from "./Challange_2";
import Challange3, { para, challangeNumber } from "./Challange_3";
import Challange4, { ChallangeNumber } from "./Challange_4";

// use of external css
import "./index.css";

// render single JSX elemeent
ReactDom.render(
  <h1>Hello world !!!</h1>, // what to show  ...... for writing (jsx expression look a like html elements) inside js file 'react' module is used
  document.getElementById("root") //where to show  ..... for dom manipulation 'react-dom' module used
);

// render multiple JSX elements
ReactDom.render(
  <div>
    <h1>First Elements</h1>
    <h2>Second Element</h2>
    <h3>Multiple Elements</h3>
  </div>,
  document.getElementById("root")
);

// render multiple JSX elements second method
ReactDom.render(
  [
    <p>second method</p>,
    <h1>First Elements</h1>,
    <h2>Second Element</h2>,
    <h3>Multiple Elements</h3>,
  ],
  document.getElementById("root")
);

// render multiple JSX elements third method usin REACTFRAGMENT
ReactDom.render(
  <React.Fragment>
    <h1>Hello</h1>
    <h2>world</h2>
  </React.Fragment>,
  document.getElementById("root")
);
// <></> is a syntatic suger form of <React.Fragment></React.Fragment>
var name = "Radhika";
var img1 = "https://picsum.photos/200/300";
var img2 = "https://picsum.photos/300/300";
var img3 = "https://picsum.photos/400/300";
ReactDom.render(
  <>
    <h1>Hello world from {name}</h1>
    <Challange1 />
    <Challange2 />
    <br />
    <br />
    {/* JSX Attributes */}
    <p contentEditable="true">
      {" "}
      <strong contentEditable="false">ContentEditable attribute</strong> : JSX
      attribute{" "}
    </p>
    <br />
    <br />
    <h1 className="heading"> React Practice</h1>
    <div className="img_div">
      <img src={img1} alt="randomimage" />
      <img src={img2} alt="randomimage" />
      {/* <a href="http://localhost:3000" target="_blank" rel="noreferrer"> */}
      <img src={img3} alt="randomimage" />
    </div>
    {/* </a> */}
  </>,
  document.getElementById("root")
);

//use of inline css in react

const heading = {
  color: "#afefea",
  fontWeight: "bold",
  textAlign: "center",
  margin: "70px 50px",
  fontFamily: "'Aboreto', cursive",
};
ReactDom.render(
  <>
    <h1 style={heading}> React Practice</h1>
    {/* use camelCase convension for css property */}
    <div
      className="img_div"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <img src={img1} alt="randomimage" />
      <img src={img2} alt="randomimage" />
      <img src={img3} alt="randomimage" />
    </div>
  </>,
  document.getElementById("root")
);

// Challange 3
ReactDom.render(
  <>
    {para}
    {challangeNumber}
    <Challange3 />
  </>,
  document.getElementById("root")
);

// Challange 4
ReactDom.render(
  <>
    <h1>This is Challange Number : {ChallangeNumber}</h1>
    <Challange4 />
  </>,
  document.getElementById("root")
);

//without use react
// var h2 = document.createElement("h2");
// h2.innerHTML = "Radhika";
// document.getElementById("root").appendChild(h2);
