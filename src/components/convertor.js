

import React,{useRef,useEffect,useState} from "react";


function Converter(){
    
    // state to display different currencies
    const [show,setShow]=useState(false)  
    // set to capture input value  
    const [val,setVal]=useState( )  
    // state for keypress
    const [key,setKey]=useState(false)  
    //reference to focus on input box on loading useRef and useEffect
    const value=useRef()
    useEffect(()=>
  value.current.focus(),[]
    
)
  
// keypress
function keyEnter(e){
        if(e.key==="Enter"){
            console.log("enter pressed")
        }
}
  
    return (
<>
<center>

                    <h1 className="text-gray-600 text-2xl uppercase">currency convertor</h1>
                    <br></br><br>
                  
                    </br><br></br>
                   
       <input type="number" placeholder="enter value..." ref={value}    onKeyPress={(e)=>setKey(e.key==='Enter')}     onChange={(e)=>setVal(e.target.value)} className="p-3 text-2xl"/>
        <button className="bg-green-500 p-3 text-bold text-white
         hover:bg-green-700 pointer:cursor uppercase ml-2" onClick={()=>setShow(true)}>get values</button>
         <br></br><br></br>


    { show || key? 
    <div>
        <p>{val } canadian dollar is {val * 60} rupees</p>
        <p>{val} american dollar is {val * 78} rupees</p>
        <p>{val} australian  dollar is {val * 55} rupees</p> 
        </div> : null
    }

{/* {val===" " && setShow(false)} */}

  
      
        </center>


</>
    )
}
export default Converter;
