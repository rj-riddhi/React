import React, {useState} from "react";
import Countercard from "./Counter_card";
import './challange.css'
const challange_num = 7;

const Challange_7 = () => {
    const [num,updateNum] = useState(0);
    
    const incNum = () => {
        updateNum(num + 1)
    }

    const decNum = () => {
        updateNum(num - 1 >= 0 ? num - 1 : 0)
        if(num === 0)
        alert('0 is Min limite')
    }
    return (
        <>
            <Countercard 
                num = {num}
                incnum = {incNum}
                decnum = {decNum}
            />
        </>
    )
}
export default Challange_7;
export {challange_num};