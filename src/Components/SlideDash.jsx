import React from 'react'
import { NavLink , Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from "react";

import { useEffect } from 'react'
import {toast , Toaster} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { FaUsers, FaMale, FaFemale, FaTachometerAlt, FaClipboardList, FaEdit, FaSignOutAlt, FaBars } from "react-icons/fa";

function SlideDash() {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate ()

    const admin = localStorage.getItem("admin")
     const protectRoute = () =>{
        if (!admin){
            navigate("/admin")
        }
    
     }
    
    
     const LogOut = () =>{
        localStorage.clear()
        navigate("/admin")
     } 
 
 
 
 
 
     useEffect(()=>{
       
        protectRoute()
    }, [])
 
 
 
 
    return (
   
      <div className="flex">
      {/* Sidebar Toggle Button */}
      <button 
        className="fixed top-4 left-4 text-white bg-blue-600 p-2 rounded-md sm:hidden z-50"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <FaBars size={24} />
      </button>

      {/* Sidebar */}
      <div className={`bg-blue-600 fixed top-0 left-0 h-screen w-60 sm:w-48 p-6 text-white flex flex-col justify-between shadow-lg transition-all duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}>
        <div>
          <h1 className="text-2xl sm:text-xl font-bold text-center mb-6 ml-2">Exam Center</h1>
          <ul className="space-y-4">
            <NavLink to="/dashboard" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-500 transition">
              <FaTachometerAlt size={20} />
              <span className="text-lg sm:text-base">Dashboard</span>
            </NavLink>
            <NavLink to="/result" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-500 transition">
              <FaClipboardList size={20} />
              <span className="text-lg sm:text-base">Result</span>
            </NavLink>
          </ul>
        </div>
        <button onClick={LogOut} className="bg-orange-500 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-orange-600 transition">
          <FaSignOutAlt size={20} />
          <span>Log Out</span>
        </button>
      </div>
      </div>

   
   
   
   
   
  )
}

export default SlideDash
