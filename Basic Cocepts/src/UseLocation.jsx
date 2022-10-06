// useLocation returns the currrent location (path) of the URL RoutePractice.jsx

import React from "react";
import {useLocation, useParams} from 'react-router-dom'
const UseLocation = () => {
    const location = useLocation();
    // const history = useNavigation();
    // console.log(history);
    const {city} = useParams();
    return (
        <>
            <h1>Current Location : {location.pathname}</h1>
            {
                location.pathname === `/user/city` ? `<h1>Please enter valid location in url` : <h2>You entered {city}</h2>
            }
        </>
    )
}
export default UseLocation;