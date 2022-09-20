import React from "react";
function Challange2(){
    var name = 'Radhika Parmar';
    var date = new Date();
    var month = (date.getMonth() + 1) < 10 ? "0"+(date.getMonth() + 1) : (date.getMonth() + 1);
    var formatted_date = date.getDate()+"-"+month +"-"+date.getFullYear();
    var days = ['Sunday','Monday','Tuesday','Wednesday','Friday','Saturday'];
    var formattedDaye = days[date.getDay()]+"-"+month+"-"+date.getFullYear();
    var time = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    return(
       <>
       <h1>Challange 2 : My Name is {name}</h1>
       <p>Today's date is : {formatted_date}</p>
       <p>Today's date in other format : {date.toLocaleDateString()}</p>
       <p>Today's date is : {formattedDaye}</p>
       <p>Current Time is : {time}</p>
       <p>Current Time in other format : {date.toLocaleTimeString()}</p>
       </>
    
    )
}
export default Challange2;