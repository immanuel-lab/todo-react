import React, { useEffect, useState } from 'react'
import {AiOutlineArrowUp} from "react-icons/ai"
function Backtotop() {

  const[BacktotopButton,setBacktotopButton]=useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>
    {
      if(window.scrollY>400){
      setBacktotopButton(true)
      }
      else{
      setBacktotopButton(false)
      }
    }
    )
  })
  const scrolltotop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <>
    {BacktotopButton &&
    <div onClick={scrolltotop} className='p-4 rounded-full bg-gray-300 fixed bottom-0 right-0 z-10 cursor-pointer'>
        <AiOutlineArrowUp size={20}/>
        </div>
}
    </>
  )
}

export default Backtotop