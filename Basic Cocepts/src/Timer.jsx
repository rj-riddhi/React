import React from 'react';
function Timer(props){
    return(
        <>
        <div className='cards'>
        <div className = 'card'>
            <div className = 'card_info'>
                <h3 className = 'card_title'> {props.title}</h3>
                <h1 className = 'heading_style2 commen_heading'>{props.total}</h1>
                <button onClick={props.count}>Get Time!</button>
            </div>
        </div>
      </div>
        </>
    )
}
export default Timer;