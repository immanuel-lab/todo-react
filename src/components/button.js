import React from 'react'
import {useDispatch} from 'react-redux'
import {login,logout} from '../features/user'
function  Button() {
  const  dispatch=useDispatch()
  return (
    <center>
       <button   onClick={()=>dispatch(login({name1:'imman',age:30,email:'imman@gmail.com'}))}   className='p-3 rounded-full text-bold bg-green-300 text-center mt-3 uppercase'> login</button><br></br>
       <button   onClick={()=>dispatch(logout())}   className='p-3 rounded-full text-bold bg-green-300 text-center mt-3 uppercase'> logout</button>
        </center>
  )
}

export default  Button