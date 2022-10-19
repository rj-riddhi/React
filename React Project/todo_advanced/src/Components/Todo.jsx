import React, { useState } from "react";
import todo from "../Images/todo-logo.svg";
import List from "./List";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, addItems] = useState([]);
  const [isEditIcon, setEditIcon] = useState(true);
  const [editIconId, setEditIconId] = useState(null);

  const addItem = () => {
    if(inputData && !isEditIcon){
        addItems(
            items.map((elem) => {
                if(elem.id === editIconId)
                    return {...elem,name: inputData}

                return elem;
            })
        )
        setEditIcon(true);
        setInputData("");
        setEditIconId(null);
    }
    else if (inputData) {
      addItems((prev) => {
        const newData = {id: Date.now() + Math.random(), name: inputData}
        return [...prev, newData];
      });
    } 
    else {
      alert("Please Enter Item First");
    }
    setInputData("");
  };

  const deleteItem = (id) => {
    const updateItems = items.filter((elem) => {
        return elem.id !== id;
    })
    addItems(updateItems);
  };

  const editItem = (id) => {
   const takeItem = items.find((elem) => {
                return elem.id === id;
           
    });
    setEditIcon(false);
    setInputData(takeItem.name);
    setEditIconId(id);

  }

  const removeAll = () => {
    addItems([]);
  }
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="logo" />
            <figcaption>Add your list here ✌️</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder=" ✍️ Add Items. "
              onChange={(e) => {
                setInputData(e.target.value);
              }}
              value={inputData}
            />
            {
                isEditIcon ?  <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> : <i className="fa fa-edit add-btn" title="Add Item" onClick={addItem}></i>
            }
           
          </div>

          {items.map((val) => {
            return (
              <List key={val.id} name={val.name} id={val.id} onDelete={() => {deleteItem(val.id)} } onEdit={() => {editItem(val.id)}}/>
            );
          })}

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={ removeAll }>
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
