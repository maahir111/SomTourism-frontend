
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {Toaster,toast} from 'react-hot-toast'
import axios from "axios"



function Sign() {


  const [ Name , setName] = useState ("")
  const [Email , setEmail ] = useState ("")
  const [Password , setPassword ] = useState ("")

  const navigate = useNavigate();
  
  
  const hadleSign = (event)=>{
    event.preventDefault()
     axios.post("https://somtourism-backend.onrender.com/sign",{
      "Name": Name,
      "Email": Email,
      "Password": Password
  
     }).then((res)=> {
      toast.success("success")
      setTimeout(() => {
        navigate("/login");
    }, 2000);
     }).catch((err)=>{
      console.log(err)
     })
  
  }
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f48b40] via-[#f9bd91] to-[#f16705] p-6">
      <div className="bg-gradient-to-br from-[#f1c09d] via-[#eeae81] to-[#fda769] p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Sign Up</h2>
        <form>
          <div className="mb-5">
            <input value={Name} onChange={(event)=> setName (event.target.value)} type="text"placeholder="username"className="w-full p-3 border bg-gray-200 outline-none border-gray-300 rounded-xl " />
          </div>
          <div className="mb-5">
            <input  value={Email} onChange={(event)=> setEmail (event.target.value)}   type="email"placeholder="Email"className="w-full p-3 border bg-gray-200 outline-none border-gray-300 rounded-xl "    /> </div>
          <div className="mb-6">
            <input value={Password} onChange={(event)=> setPassword (event.target.value)}  type="password"placeholder="Password"className="w-full p-3 bg-gray-200 outline-none border border-gray-300 rounded-xl " />
          </div>
          <button onClick={hadleSign} type="submit"className="w-full bg-gradient-to-r  from-[#f5b383] to-[#f16705] text-white p-3 rounded-xl hover:opacity-90 transition shadow-lg">  Sign Up</button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-700">  Already have an account? <a href="/login" className="text-indigo-500 hover:underline">Login</a></p>
      </div>
      <Toaster/>
    </div>

  );
}

export default Sign
