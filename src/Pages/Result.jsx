import axios from 'axios'
import { useLocation } from "react-router-dom"; // Import useLocation
import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useNavigate  } from 'react-router-dom';
import SlideDash from '../Components/SlideDash';
import { FaCheck } from "react-icons/fa";


function Result() {

  const location = useLocation();
  const data1 = location.state?.data || "";

  const [data, setData] = useState([]);


 //function data kenaayo

const handleGetData = () => {
  axios.get("http://localhost:500/get").then((response)=>{
        setData(response.data);

    }).catch((err)=>{
        console.log(err)
    })
}
  useEffect (()=>{
    handleGetData()
  }, []);


  const navigate = useNavigate ()

const admin = localStorage.getItem("admin")
const protectRoute = () =>{
    if (!admin){
        navigate("/admin")
    }

}


const handleGetDalate = (id)=> {
  
  axios.delete("http://localhost:500/remove/"+id ).then((err)=> {
    alert("data has been dalate ") 
    setData(prevData => prevData.filter(item => item._id !== id));

  }).catch((err)=>{
    console.log(err)
  })
}

useEffect (()=> {
  protectRoute ()
},[])

 
  return (
      
      <div>

      
      <SlideDash/>


    <div className='mx-4  sm:ml-[200px]'>
  <table className='w-full max-w-[90%]  md:max-w-[80%] lg:max-w-[70%] mx-auto  my-10'>
    <thead>
      <tr className='border-2 text-black'>
        <th className='p-2 px-6 sm:px-16 font-serif border-2'>Name</th>
        <th className='p-2 font-serif border-2'>Email</th>
        <th className='p-2 px-1  font-serif border-2'>Gender</th>
        <th className='p-2 px-2  font-serif border-2'>Types</th>
        <th className='p-2 font-serif border-2'>Country</th>
        <th className='p-2 font-serif border-2'>Mobile</th>
        <th className='p-2  font-serif border-2'>Guest</th>  
        <th className='p-2 font-serif border-2'>PickUp Address</th>
        <th className='p-2 font-serif border-2'>Check In</th>
        <th className='p-2 font-serif border-2'>Check Out</th>
        <th className='p-2 font-serif border-2'>Payment</th>
        <th className='p-2 font-serif border-2'>Delete</th>
      </tr>
    </thead>
    <tbody>
    {data.length > 0 ? (
    data.map((result, index) => (
      <tr key={index} className='border-2 text-black hover:bg-gray-100'>
        <td className='p-4 font-serif border-2'>{result.Name}</td>
        <td className='p-4 font-serif border-2'>{result.Email}</td>
        <td className='p-4 px-1 font-serif border-2'>{result.jinsi}</td>
        <td className='p-4 px-2 font-serif border-2'>{result.Type}</td>
        <td className='p-4 font-serif border-2'>{result.Country}</td>
        <td className='p-4 font-mono text-center border-2'>{result.Mobile}</td>
        <td className='p-4 font-serif text-center border-2'>{result.Guest}</td>
        <td className='p-4 font-serif border-2'>{result.Adress}</td>
        <td className='p-4 font-mono border-2'>{result.CheckIn}</td>
        <td className='p-4 font-mono border-2'>{result.dhacid}</td>
        <td className='pl-10 text-green-500 font-mono border-2 text-center'><FaCheck /></td>
        <td className='p-4 font-serif border-2'>
          <button 
            onClick={() => handleGetDalate(result._id)} 
            className='text-red-500 text-2xl'>
            <MdDelete />
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="12" className='text-center p-4'>No data available</td>
    </tr>
  )}
</tbody>

</table>
</div>



    </div>
  );
  
}

export default Result
