import React,{useState}  from "react";

const Form = () =>{
    const [name,appendName] = useState('');
    function btnClick(event){
        event.preventDefault(); //stops form from reload which is default behaviour of the form;
        const val = document.getElementById('name').value;
        appendName(val);
    }
    return(
        <>
        
            <h1 className="heading_style2 commen_heading" style={{backgroundColor:'azure'}}>Hello {name}</h1>
            <form onSubmit={btnClick}>
            <div className="form">
            <input type='text' placeholder="Enter Your Name" className="input" id='name'/>
            <button type="submit" className="frmBtn">Click Me</button>
        </div>
        </form>
        </>
    );
}
export default Form;