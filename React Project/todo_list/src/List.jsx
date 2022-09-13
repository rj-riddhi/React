import React from "react";
const List = (props)=>{
     return (
        <>
            <div className="todo_style">
                <i class='fa fa-times' aria-hidden='true'/>
                <li className ={props.id}>{props.value}</li>
            </div>
        </>
     )
}
export default List;