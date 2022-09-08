import React,{useState} from "react";
const App = ()=>{

    let day_arr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    var [time,updateTime] = useState(new Date().toLocaleTimeString());
    var [day,updateDay] = useState(day_arr[new Date().getDay()]);

    function incTime(){
        updateTime(new Date().toLocaleTimeString());
    }
    
    function incDay(){
        updateDay(new Date().getDay()+1);
    }
    setInterval(incTime, 1000);
    setInterval(incDay, 3.6e+6);
    return (
        <>
          <div className="main_div">
            <span className="day">{day}</span>
            <div className = 'card_info'>
                <h1 className = 'heading_style'>{time}</h1>
            </div>
            
          </div>   
           
        </>
    );
}
export default App;