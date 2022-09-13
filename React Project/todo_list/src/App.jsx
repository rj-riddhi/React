import React, {useState} from "react";
import './index.js'
import List from './List'
const App = () =>{
    const [items,addnewItem] = useState([])
    const [curValue, setValue] = useState()
    const addItem = () => {
        addnewItem((prevalue)=>{
            const val = document.getElementsByName('iteminput')[0].value;
            return [...prevalue,
                {id : prevalue.length,
                value : val}]
           });
           setValue('');
    }
    const itemChanged = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/>
                    <input type='text' placeholder="Add a Items" name='iteminput' value={curValue} onChange={itemChanged}/>
                    <button onClick = {addItem}> + </button>
                    <ol>
                        {
                            items.map((val) => {
                               return <List 
                                        key = {val.id} 
                                        value={val.value} 
                                        id={val.id}/>
                        })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}
export default App;