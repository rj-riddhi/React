import React from "react";
import {  Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
const RoutesPractice = () =>{
    return(
        <>
        <Routes>
            <Route exact path = '/' element = <Home />/>
            <Route path = '/about' element = <About />/>
            <Route path = '/contact' element = <Contact />/>
            <Route path = '*' element = <Error />/>
        </Routes>
        </>
    )
}
export default RoutesPractice;