import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {Toaster,toast} from 'react-hot-toast'
function Admin() {
 
 
const [ Email , setEmail] = useState ("")
const [ Password , setPassword] = useState ("")
const Navigate = useNavigate ()

const handleLogin = (evenT)=>{
  event.preventDefault()
   axios.post("https://somtourism-backend.onrender.com/admin/login",{
        "Email": Email,
        "Password": Password
    }).then((res)=>{

        if(res.data.success){
          toast.success("login Succefully")
          setTimeout(()=>{
          Navigate("/slide")
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
        <div className=''>
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#f48b40] via-[#f9bd91] to-[#f16705] ">
  <form className="w-[400px] bg-white/80 backdrop-blur-md shadow-lg flex flex-col items-center text-center rounded-lg p-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Welcome Back</h2>
    
    <input  onChange={(event) => setEmail(event.target.value)}  className="w-full h-12 px-4  outline-none  rounded-lg mb-4 text-gray-700" type="text" placeholder="Enter Your Name" />

    <input  onChange={(event) => setPassword(event.target.value)} className="w-full h-12 px-4  outline-none  rounded-lg mb-4 text-gray-700" type="password" placeholder="Enter Your Password"  />
    <button   onClick={handleLogin} type="submit" className="w-full bg-gradient-to-r from-[#f5b383] to-[#f16705] text-white p-3 rounded-xl hover:opacity-90 transition shadow-lg"> Login</button>

  </form>
</div>
       <Toaster />
    </div>
  )
}

export default Admin
