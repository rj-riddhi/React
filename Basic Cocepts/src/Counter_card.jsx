import React from "react";
const Countercard = (props) => {
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1 className='counter'>{props.num}</h1>
                    <br/>
                    <div className='btns'>
                    <button className="incBtn" onClick={props.incnum}> Increment </button>
                    <button className="decBtn" onClick = {props.decnum}> Decrement </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Countercard;