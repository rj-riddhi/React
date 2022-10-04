// to see the megic of useParams hook see last route of RoutePractice.jsx

import React from "react";
import {useParams} from 'react-router-dom'
const UseParams = () => {
    const {name, lname} = useParams();
    return (
        <>
            <h1>Hello {name} {lname}</h1>
        </>
    )
}
export default UseParams;