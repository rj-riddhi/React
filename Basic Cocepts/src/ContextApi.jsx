// Context API

// React hook provides concept of Context API

// Defination : React Context API allows you to easily access data at different levels of Component TreeWalker

// example:     Parent Component(data) -> Child component A -> Child component B -> Child Component C
//              Component C can easily get access of parent component's data without taking help of Inter,ediate components A & B with the use of "CONTEXT API"

// STEPS : 1) createContext() (const Name = createContext())
//         2) Provider    (<Name.provider value = {'Radhika'}>Component</Name.provider> and export {Name})
//         3) Consumer    (import , <Name.Consumer>{(value) => {return {value}}}</Name.Consumer>)
//  consumer always except functions


import React, {createContext} from "react";
import ComA from './ComA';

//share data from parent component to the last component using contextAPI
// step 1 : create context
const FirstName = createContext();
const LastName = createContext();
const ContextApi = () => {
    return (
      <>
        {/* step 2 : provide context */}
        <FirstName.Provider value={"Radhika"}>
          <LastName.Provider value={"Parmar"}>
            <ComA />
          </LastName.Provider>
        </FirstName.Provider>
      </>
    ); 
}
export default ContextApi;
export {FirstName, LastName};