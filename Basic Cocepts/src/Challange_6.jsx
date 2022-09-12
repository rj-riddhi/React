import React, {useState} from "react";
const cNumber = 6;
const Challange6 = ()=>{

    const[details,setName] = useState({
        fname : '',
        lname : '',
        email : '',
        mobile : ''
    })
    function btnClick(event)
        {
           event.preventDefault();
           alert ('Form submited!!!');
        }
    const update_details = ()=>{
           let firstname = document.getElementsByName("fname")[0].value;
           let lastname = document.getElementsByName("lname")[0].value;
           let Email = document.getElementsByName("email")[0].value;
           let Mobile = document.getElementsByName("mobile")[0].value;
           setName(()=>{
            return ({
                fname : firstname,
                lname : lastname,
                email : Email,
                mobile :Mobile
           })
           })
    }
    return(
        <>
            <h1 className="heading_style2 commen_heading" style={{backgroundColor:'azure'}}>Hello {details.fname} {details.lname}</h1>
            <p>{details.email}</p><br />
            <p>{details.mobile}</p><br />
            <form onSubmit={btnClick}>
            <div className="form">
            <input type='text' placeholder="Enter Your First Name" className="input" name = 'fname' value={details.fname} autoComplete='off' onChange={update_details}/>
            <input type='text' placeholder="Enter Your Last Name" className="input" name = 'lname' value={details.lname} autoComplete='off' onChange={update_details}/>
            <input type='email' placeholder="Enter Your Email" className="input" name = 'email' value={details.email} autoComplete='off' onChange={update_details} />
            <input type='number' placeholder="Enter Your Mobile Number" className="input" name='mobile' value={details.mobile} autoComplete='off' onChange={update_details}/>
            <button type="submit" className="frmBtn">Click Me</button>
        </div>
        </form>
        </>
    )
}
export default Challange6;
export {cNumber};