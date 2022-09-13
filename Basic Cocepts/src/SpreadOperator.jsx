// Use of Spread Operator
// Copy all elements of an array to another array

import React from "react"

const SpreadOperator = ()=>{
    // operator for simpole array
    const name = ['Radhika', 'Riddhi', 'Rina']
    const surname = ['Parmar', 'Rathod', 'Shah']
    const spreadOperator = [...name, ...surname]

    // operator for distructuring
    const number = [1,2,3,4,5,6];
    const [one, two, ...rest] = number

    // operator with an array of object
    const person = {
        name : 'Radhika',
        surname : 'parmar',
        age : '20'
    }
    const aducation = {
        ...person,
        graduat : 'yes',
        branch : 'Computer Engineering',
        age :'21'
    }
    const spread = {...person, ...aducation}
    console.log(spread)

    return(
        <>
            <h1>Use of Spread Operator (...)</h1>
            Spread Operator used for Copy all elements from one array to another array
            It is used with array, an array of objects, Cobinationtion with distructuring
            <p /><br/>
            <ol><strong>Use of Spread Operator</strong></ol>
            <li>With Simple Array</li>
            Output : {spreadOperator}
            <li>With array distructuring</li>
            Output : {one} {two} {rest}
            <li>With arraies of an object</li>
            Output : check your browser's console
        </>
    );
}
export default SpreadOperator;