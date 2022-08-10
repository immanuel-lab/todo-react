import React,{useRef,useEffect} from 'react'
import ReactDOM from 'react-dom'

import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";







function Register(){



const navigate=useNavigate()
const { watch,register, handleSubmit, formState:{errors} } = useForm();

const password1=watch('password')
  const onSubmit = data => console.log(data);
    return(
        <div className='bg-gray-500'>
        <div class="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true})}
                    
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 ring-blue-600"
                        
                        placeholder="Name"   />
                            {errors.name && <small className='text-red-500'>Name is required</small>}
                    
                    
                    <input {...register("email",{ required: true, maxLength: 20 ,  pattern: {
                         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
       
      }  })}
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4  focus:outline-none focus:ring-2 ring-blue-600"
                        name="email"
                        placeholder="Email" />
                            {errors.email && <small className='text-red-500'>enter valid email</small>}

                    
                    
                    <input {...register("password",{required:true,minLength:10})}
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 ring-blue-600"
                        
                        placeholder="Password"  />
                    
                    {errors.password && errors.password.type==="required" && <small className='text-red-500'>password is required</small>}
                    {errors.password && errors.password.type==="minLength" && <small className='text-red-500'>please type atleast 10 charecters</small>}
                    
                    
                    <input {...register("confirm_password",{ required: true, validate:(value)=>value===password1})}
                        type="password"
                        className="block border border-grey-dark w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 ring-blue-600"
                       
                        placeholder="Confirm Password" />
                    {errors.confirm_password && errors.confirm_password.type==="required" && <small className='text-red-500'>confirm password is required</small>}
                    {errors.confirm_password && errors.confirm_password.type==="validate" && <small className='text-red-500'>passwords don't match</small>}
                    
                    
                    
                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                    </form>
                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <button className="px-1 py-1 rounded-full bg-green-500 ml-2 hover:bg-green-300" onClick={()=>{navigate('/login')}}>
                        Log in
                    </button>
                </div>
            </div>
            </div>
            </div>
        
    )
}
export default Register;
