import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaMale,  FaFemale, FaUserGraduate, FaUserPlus, FaChalkboardTeacher } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Result from './Result';
import SlideDash from '../Components/SlideDash';

function Dashboard() {
  const [total , setData] = useState ([])
  const [goaan, setGoaan] = useState({ Male: 0, Female: 0 });
  const [totalUsers , settotalUsers ] = useState([]);

 
  




  
  const navigate = useNavigate ()

/// api isoo bandhigayo user riradooda
const hanldGerUser = ( ) =>{
  axios.get("http://localhost:500/user/total").then((res)=> {
      settotalUsers(res.data.totalUsers )

  }).catch((err)=>{

    console.log(err)
  })
}




  const admin = localStorage.getItem("admin");

  // Route Protection
  const protectRoute = () => {
    if (!admin) {
      navigate("/admin");
    }
  };


  const hanldGetBOOKIN = ( ) =>{
    axios.get("http://localhost:500/total").then((res)=> {
        setData(res.data.total)

    }).catch((err)=>{

      console.log(err)
    })
  }
  
  const handleGender = () => {
    axios.get("http://localhost:500/goaan").then((res) => {
        setGoaan(res.data); // Set data to { Male: x, Female: y }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect (()=>{
     hanldGerUser()
      hanldGetBOOKIN()
      protectRoute()
      handleGender()
  
}, [])

  return (
    <div>

  <SlideDash/>


    <div className="   ">
      
     

    <div className="flex">
    

    {/* Main Content */}
    <div className="flex-1  sm:ml-[15%] p-6 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="bg-black py-6 px-10 rounded-2xl shadow-xl w-full max-w-3xl ">
        <h1 className="text-3xl font-bold">Welcome Admin !!!</h1>
        <p className="mt-2 text-gray-300">This is the Admin Dashboard</p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center hover:scale-105 transition">
          <FaUsers size={50} className="text-blue-400 mb-3 animate-bounce" />
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-2xl mt-2 font-bold">{totalUsers}</p>
        </div>

        <div className="bg-blue-600 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center hover:scale-105 transition">
          <FaUsers size={50} className="text-white mb-3 animate-pulse" />
          <h2 className="text-xl font-semibold">Total Bookings</h2>
          <p className="text-2xl mt-2 font-bold">{total}</p>
        </div>

        <div className="bg-red-600 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center hover:scale-105 transition">
          <FaMale size={50} className="text-white mb-3 animate-spin-slow" />
          <h2 className="text-xl font-semibold">Male Bookings</h2>
          <p className="text-2xl mt-2 font-bold">{goaan.Male}</p>
        </div>

        <div className="bg-green-600 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center hover:scale-105 transition">
          <FaFemale size={50} className="text-white mb-3 animate-wiggle" />
          <h2 className="text-xl font-semibold">Female Bookings</h2>
          <p className="text-2xl mt-2 font-bold">{goaan.Female}</p>
        </div>
      </div>
    </div>
  </div>
{/* //////  RESULY */}



 
 
 
 
 
    
 
 
 
 
 
 
 
 
 
 
 
 </div>



    



    </div>


  
  );
}

export default Dashboard;
