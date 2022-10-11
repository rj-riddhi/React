import React from "react";
import {  Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Navbar from './Navbar';
import UseParams from './UseParams';
import UseLocation from './UseLocation';
import Search from './Search';
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
            {/* useLocation use */}
            <Route path = '/user/:city' element = <UseLocation />/>
            <Route path = '/search' element = <Search />/>
            {/* two ways to handling invalid url path  */}
            {/*1.)  redirect to the error page when user enters wrong path from url */}
            <Route path = '*'  element = <Error />/>
            {/*2.) instead of showing error page  direct redirect to the home page when user enters wrong path from url */}
            <Route path = '*'  element = { <Navigate to="/" /> }/>
        </Routes>
        </>
    )
}
export default RoutesPractice;