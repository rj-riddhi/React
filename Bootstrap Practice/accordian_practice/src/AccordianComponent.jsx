import React, {useState} from "react";
const AccordianComponent = (props)=>{
    const [btnSign,changeSign] = useState('+');
    return(
        <>
        <div className="main_heading">
            <p className='btnsign' onClick={()=>{
                btnSign === '+' ? changeSign('-') : changeSign ('+')
            }}>{btnSign}</p>
            <h3>{props.question}</h3>
        </div>
           {btnSign === '-' ? <p className="main_heading" >{props.answer}</p> : null}
        </>
    )
}
export default AccordianComponent;