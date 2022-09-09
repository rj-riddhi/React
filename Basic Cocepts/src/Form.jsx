import React,{useState}  from "react";

const Form = () =>{
    const [name,appendName] = useState('');
    function btnClick(event){
        const val = document.getElementById('name').value;
        appendName(val);
    }
    return(
        <>
        
            <h1 className="heading_style2 commen_heading" style={{backgroundColor:'azure'}}>Hello {name}</h1>
        <div className="form">
            <input type='text' placeholder="Enter Your Name" className="input" id='name'/>
            <input type='password' placeholder="Enter Your Password" className="input" />
            <button onClick = {btnClick} className="frmBtn">Click Me</button>
        </div>
        </>
    );
}
export default Form;