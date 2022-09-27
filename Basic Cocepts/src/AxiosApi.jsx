import React, { useEffect, useState } from "react";
import axios from 'axios';
const AxiosApi = () => {
    const [num, updatedNum] = useState();
    const [data,setdata] = useState({
        name: '',
        url: '',
    })
    useEffect(()=>{
        async function getData(){
            var res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
             setdata({
                name: res.data.name,
                url: res.data.sprites.back_default
             })
        }
        getData();
        
    })
    return (
        <>
        <h1>You Choose </h1>
         <select value={num} onChange={(event)=>{
                updatedNum(event.target.value);
         }}>
            <option value='1'>1</option> 
            <option value='2'>2</option> 
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
            <option value='25'>25</option>
                
                
            </select>
        <div className="main_div">
        <h1>{data.name}</h1>
        <img src={data.url} alt = 'pikachu'/>
        </div>
            
        </>
    )
}
export default AxiosApi;