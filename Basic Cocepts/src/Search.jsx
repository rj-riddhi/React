import React, { useState } from "react";
import SearchedImage from "./SeachedImage";
const Search = () => {
    const [img, updateImg] = useState("");
    const searchedItem = (event) => {
        updateImg(event.target.value)
    }
    return (<>
        <div className="searchDiv">
            <input className="search" type="text" placeholder="Search Here" onChange = {searchedItem} value = {img}/>
            <br />
            <SearchedImage val = {img} style = {{paddingTop : '15px'}} />
        </div>
    </>)
}

export default Search;