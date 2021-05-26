import React,{useState} from 'react';
function First(){
    let [count,setCount]=useState(0);

        return(<div>
            <h1>mani sankar</h1>
            <button onClick={()=>setCount(count+1)}>add{count}</button>
        </div>)
    
}
export default First