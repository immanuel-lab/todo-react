import { createSlice } from "@reduxjs/toolkit"

export const userSlice=createSlice({
    name:'user',
    initialState:{value:{name1:"",email:"",age:0}},
    reducers:{
       login: (state,action)=>
   { state.value=action.payload},
   logout:(state)=>
   {state.value={name1:"",email:"",age:0}}
   
    }
})

export default userSlice.reducer
export const {login,logout}=userSlice.actions;