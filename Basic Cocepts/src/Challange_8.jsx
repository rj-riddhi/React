import React, { useState, useEffect } from "react";
const challange_number = 8;
const Challange8 = () => {
    const [num,incNum] = useState(0);
    useEffect(()=>{document.title = `You Clicked Me ${num} times`},[num]);
    // useEffect(()=>{setTimeout(()=>{
    //     num < 5 ? incNum(num + 1) : alert("stoped")
    // },1000)})
    return(<>
   <button onClick={()=>{incNum(num + 1)}}>Clicked Me {num} </button><br /><br />
   <button onClick = {()=>{incNum(0)}}>Reset</button>
   {/* <h1>Timer {num}</h1> */}
    </>);
}
export default Challange8;
export {challange_number};