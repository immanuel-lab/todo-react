import React from 'react'
import { useSelector } from 'react-redux'; 

function Login111() {
  const user=useSelector((state)=>state.user.value)
  return (
    <center>
    
        <h1  className='text-2xl text-gray-900  text-center '>Login</h1><br></br>
       <h1 className='text-2xl text-gray-900  text-center '>name:{user.name1}</h1>
       <h1 className='text-2xl text-gray-900  text-center '>age:{user.age}</h1>
       <h1 className='text-2xl text-gray-900  text-center '>email:{user.email}</h1>
    </center>
  )
}

export default Login111;