import React from "react";
import AccordianComponent from './AccordianComponent';
import Questions from './api';
const accordian = () => {
   return (
    <React.StrictMode>
    <div className="main_div">
<div className="center_div" >
<h1>Interview Questions</h1>

{
    Questions.map((value,index) => {
            return(<AccordianComponent 
                key={index}
                question={value.question}
                answer={value.answer}
            />);
    })
}
</div>
</div>
    </React.StrictMode>
   )
}
export default accordian;