import React from 'react';
import {Add, Sub, Mul, Div} from './Calc';

const ChallangeNumber = 4;
function Challange4(){
     return (
        <>
            <ul>
                <li>Addition of two numbr is : { Add(40,4) }</li>
                <li>Substraction of two number is : { Sub(30,3)}</li>
                <li>Multiplication of Two number is : { Mul(10,3) }</li>
                <li>Division of two number is : { Div(10,3)} </li>
            </ul>
        </>
     )
}

export default Challange4;
export { ChallangeNumber };