import React from 'react'
import Axios from 'axios'
import {useEffect,useState} from "react"
function Infinitescroll() {
   const [images,setImages]=useState([])
    useEffect(() => {
Axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then((res)=>{console.log(res) ;setImages(res.data) }).catch(err=>console.log(err));
 
    })
  return (
    <>
   {images.map((image)=><div className="flex  w-48 h-48 bg-gray-300 mb-3  items-center "><img src={image.image} className="w-32 h-32"/></div>)}
    
    I</>
  )
}

export default Infinitescroll