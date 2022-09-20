import React from "react";
import Tab from '@mui/material/Tab';
const App = ()=>{
    const clicked = ()=>{
        alert("clicked");
    }
    return(
        <>
            <Tab value="one" label="Item One" onClick={clicked}/>
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
        </>
    )
}
export default App;