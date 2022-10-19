import React from "react";
const List = (props) => {
    return(
        <div className="showItems">
                        <div className="eachItem">
                            <h3>{props.name}</h3>
                            <div className="todo-btn">
                                <i className="fa fa-edit add-btn" id={props.id} title="Edit Item" onClick={()=>{props.onEdit(props.id)}}></i>
                                <i className="fa fa-trash add-btn" id={props.id} title="Delete Item" onClick={props.onDelete}></i>
                            </div>
                        </div>
                    </div>
    )
}
export default List;