import Login from "./login";
import Register from "./register";
import amazon from './amazon.jpg';
import ReactDOM from 'react-dom'
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import Todo from "./todo";
import Converter from "./convertor";
import {GiHamburgerMenu} from 'react-icons/gi'
import { icons } from "react-icons/lib";

function Navbar(){

  // const handleNav = () => {
  //   setNav(!nav);
  // };
  
// usestate for navbar

const[show,setShow]=useState(false)
const[nav,setNav]=useState(false)
const handleclick=()=>{
      setShow(!show)
}


    return (
    
              <Router>
                
                <nav className= " p-3 bg-gray-600 ">
            <div className="flex justify-between items-center ">
                
             {/* logo  */}
                <div>
                    <img className="object-scale-down h-20 w-30  rounded-full" src={amazon} alt="image"/>
               </div>
            
    {/* nav items */}
    <ul className="hidden md:flex space-x-12 font-bold cursor-pointer ">

        <li className=" font-bold text-3xl hover:bg-gray-600 hover:text-white">
          <Link to="/login">LOGIN</Link>
          </li>
        <li className="font-bold text-3xl hover:bg-gray-600 hover:text-white">
          <Link to="/register">REISTER</Link>
          </li>
          <li className="font-bold text-3xl hover:bg-gray-600 hover:text-white">
          <Link to="/todo">Todo</Link>
          </li>
          <li className="font-bold text-3xl hover:bg-gray-600 hover:text-white">
          <Link to="/converter">Converter</Link>
          </li>
        
         
     </ul>
     <div className="md:hidden " >
              {show ? <AiOutlineClose size={30}  onClick={handleclick} />: <GiHamburgerMenu size={30} onClick={handleclick} />  }
          </div>

</div>
  
    

  </nav>  
    
  
{show  ?  < ul onClick={handleclick} className="absolute bg-gray-300  items-center  w-full  h-screen px-8 ">

            <li   className=" font-bold text-3xl hover:bg-gray-600 hover:text-blue-500 border-b-2  border-gray-600  mb-3 w-full p-5 text-center">
              <Link to="/login">LOGIN</Link>
              </li>
            <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500 border-b-2 border-gray-600 mb-3 w-full p-5 text-center">
              <Link to="/register">REISTER</Link>
              </li>
              <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500  border-b-2 border-gray-600  mb-3 w-full p-5 text-center">
              <Link to="/todo">Todo</Link>
              </li>
              <li className="font-bold text-3xl hover:bg-gray-600 hover:text-blue-500  border-b-2 border-gray-600 w-full p-5 text-center">
              <Link to="/converter">Converter</Link>
              </li>

</ul> : null }
     







                 
                 
                 {/* definig routes for component */}
        <Routes>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/todo" element={<Todo/>} />
            <Route exact path="/converter" element={<Converter/>} />

        </Routes>
             
        
              </Router>
            
            )
    }
        
    


export default Navbar;