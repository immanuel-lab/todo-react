import { useState } from "react"

function State(){
    const[count,setCount]=useState(0)
    function increase(){
        setCount(count+1)
    }
    return(
        <div>
            <center>
       <p>you clicked {count}</p> 
       <button type="button" class="btn btn-success" onClick={increase}>add on</button>
       </center>
       </div>
    )
}
export default State;