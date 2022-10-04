import React from "react";
import {  Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import UseParams from './UseParams';
const RoutesPractice = () =>{
    return(
        <>
        <Navbar />
        <Routes>
            <Route exact path = '/' element = <Home name= {'Home'} />/>
            <Route path = '/about' element = <About name= {'About'}/>/>
            <Route path = '/contact' element = <Contact name= {'Contact'}/>/>
            {/* useParams use */}
            <Route path = '/user/:name/:lname' element = <UseParams />/>
            <Route path = '*' element = <Error />/>
        </Routes>
        </>
    )
}
export default RoutesPractice;