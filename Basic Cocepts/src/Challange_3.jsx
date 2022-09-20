import React from "react";
var challangeNumber = 3;
var para = `This is Challange Number : `;

function Challange3(){
     const div_style = {
        borderRadius :'25px',
        maxWidth : '30%',
        textAlign : 'center',
        display : 'flex',
        margin: '20% auto',
        backgroundColor : '#eddea4',
        padding : '1rem'
    };
    const span_first = {
        color : '#00a7e1',
        fontFamily: "'Aboreto', cursive"
    }

    const currentTime = new Date().toLocaleTimeString('en-GB');
    const compare = currentTime.substring(0,2);
    var greeting = '';
    var span_second = {
        fontFamily : "'Aboreto', cursive",
        color : 'Black'
    };
    if(compare >= 1 && compare < 12)
    {
    greeting = 'Good Morning.';
    span_second.color = 'Green';
    }
    else if (compare >= 12 && compare < 19)
    {
    greeting = 'Good Afternoon.'
    span_second.color = 'Orange';
    }
    else
    greeting = 'Good Night.'
    return (
        <>
        <div style={ div_style }>
            <h1><span style = { span_first }>Hello Sir ,</span><span style = { span_second }> { greeting }</span></h1>
        </div>
        </>
    );
}
export default Challange3;
export { challangeNumber ,para };