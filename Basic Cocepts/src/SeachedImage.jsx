import React from "react";
const SearchedImage = (props) => {
    // 'https://www.shutterstock.com/search/'+props.val
    const url = `https://source.unsplash.com/user/400x300/?${props.val}`;
    return (<>
    <div>
    {(props.val).length > 0 ?<img src={url} alt= {props.val}/> : ''}
    </div>
    </>)
}

export default SearchedImage;