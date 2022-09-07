// Use of hook
import React,{useState} from 'react';
import Counter from './Counter';
import Timer from './Timer';
let CNumber = 5;
const Challange_5 = () =>{
    const [total,IncCount] = useState(0);
    const count = ()=>{
        IncCount(total + 1);
    }
    const [time,updatedTime] = useState('00:00:00');
    const currentTime = ()=>{
        let uTime = new Date().toLocaleTimeString('en-GB');
            updatedTime(uTime)
    }
    return (
        <>
      <Counter total = {total}
               count = {count}
               title = 'Counter App'
      />
      <Timer total = {time}
               count = {currentTime}
               title = 'Timer App'
      />
        </>
    );
}

export default Challange_5;
export { CNumber };