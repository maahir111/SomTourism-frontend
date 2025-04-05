import axios from "axios";
import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import {Toaster,toast} from 'react-hot-toast'

function Login() {
const [ Name , setName] = useState ("")
const [Email , setEmail ] = useState ("")
const [Password , setPassword ] = useState ("")

const Navigate = useNavigate ()
const handleLogin = (event)=> {
  event.preventDefault()
  axios.post("https://somtourism-backend.onrender.com/login",{
    
    "Email": Email,
    "Password": Password
  }).then((res)=> {
    
   if(res.data.success){
            toast.success("login Succefully")
            setTimeout(()=>{
            Navigate("/home")
            }, 2000)
  
            localStorage.setItem("admin", JSON.stringify(res.data.data))
  
          }
          else{
            toast.error("incorect passord ")
            setTimeout(()=>{
              
            })
          }
      }).catch((err)=>{
          console.log(err)
      })
  }

  



  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f48b40] via-[#f9bd91] to-[#f16705] p-6">
      <div className="bg-gradient-to-br from-[#f1c09d] via-[#eeae81] to-[#fda769] p-10 rounded-3xl shadow-2xl w-full max-w-md transform transition duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6"> Login In</h2>
<form>
    
      <div className="mb-5">
            <input value={Email} onChange={(event)=> setEmail (event.target.value)}  type="email" placeholder="Email"className="w-full p-3 border outline-none bg-gray-200 border-gray-300 rounded-xl"  />
      </div>
      <div className="mb-6">
            <input value={Password} onChange={(event)=> setPassword (event.target.value)}  type="password" placeholder="Password"className="w-full outline-none bg-gray-200 p-3 border border-gray-300 rounded-xl"   />
     </div>
          <button onClick={handleLogin} type="submit" className="w-full bg-gradient-to-r from-[#f5b383] to-[#f16705] text-white p-3 rounded-xl hover:opacity-90 transition shadow-lg"> Login</button>
 </form>
        <p className="mt-6 text-center text-sm text-gray-700">  Create account? <a href="/" className="text-indigo-500 hover:underline">Sign up</a> </p>
      </div>
     < Toaster />
    </div>
  );
}

export default Login;


