import React, {useContext} from 'react';
import { FirstName, LastName } from './ContextApi';
const ComC = () => {
    const fname = useContext(FirstName)
    const lname = useContext(LastName)
    return (
    <>
        <p>Use of <strong>useContext API</strong>  Hook (Only consumer part is changed in createContext API part while uwe use useContext API)</p>
        <p>useContext API used for making consumer part complex to easy</p>
        <h3>My Name is {fname} {lname}</h3>
    </>
    );
};
export default ComC;