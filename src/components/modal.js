




import React, { useState } from "react";
import Todo from "./todo";


function Modal({closeModal,deleteTask,task,id}){

   
    
return (
  
    <div className="  bg-gray-200  fixed inset-0  ">
        <div className="flex h-screen justify-center items-center ">

            <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-red-500 rounded-xl z-50">
                
                <div className="flex  text-lg  text-zinc-600   mb-10" >Are you sure you want to delete?</div>
                <div className="flex justify-center">
                    <button onClick={()=>{
                        console.log(id)
                        deleteTask(id)
                        closeModal(false)
                    }} className=" rounded px-6 py-2 text-white  bg-green-400 focus:outline-none">Yes</button>
                    <button  onClick={()=>closeModal(false)} className="rounded px-6 py-2 ml-4 text-white bg-blue-500  focus:outline-none ">No</button>
                </div>

            </div>
        </div>
      </div>

);
}

export default Modal;
