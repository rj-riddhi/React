import React from "react";
const List = (props)=>{
     return (
        <>
            <div className="todo_style" >
                <i className='fa fa-times' aria-hidden='true' onClick={()=>{props.onSelect(props.id)}}/>
                <li >{props.value}</li>
            </div>
        </>
     )
}
export default List;