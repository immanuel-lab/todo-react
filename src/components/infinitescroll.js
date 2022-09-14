import React from 'react'
import Axios from 'axios'
import {useEffect,useState} from "react"
import Loadinganime from "./loadinganime";

function Infinitescroll() {
   const [images,setImages]=useState([])
   const[page,setPage]=useState(1)
   const[loading,setLoading]=useState(true)
    useEffect(() => {
Axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=${page}&sparkline=false`)
  .then((res)=>{console.log(res) ;setImages(prev=>[...prev,...res.data]) });setLoading(false);
 
    },[page])
     
    const handleScroll = () => {
      if (
          window.innerHeight + document.documentElement.scrollTop + 1 >=
          document.documentElement.scrollHeight
      ) {
        setLoading(true)
          setPage((prev) => prev + 1);
      }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
return ()=>window.removeEventListener("scroll",handleScroll);
}, []);

  return (
    <>

   {images.map((image)=>
<div className=' flex  justify-center'>
    <div className='w-96 h-72 bg-gray-300 mb-3 ml-3 mt-5'>
      <img src={image.image} alt="image" />
      </div>
 </div>)}
   
   {loading && <Loadinganime /> }

    </>
  )
}

export default Infinitescroll