import React from "react";
import { useState } from "react";
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import {Toaster,toast} from 'react-hot-toast'
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Scroll from "../Components/Scroll";
const Register = () => {

  const params = useParams ()

  const navigate =useNavigate()
  const [Name , setName] = useState ("")
  const [Email  , setEmail] = useState ("")
  const [Type  , setType] = useState ("")
  const [ Country , setCountry] = useState("")
  const [ Password , setPassword] = useState("")
  const [Message , setMassage ] = useState("")
  const [ Mobile , setMobile ] = useState ("")
  const [ jinsi , setjinsi ] = useState ("")
  const [ Adress , setAdress ] = useState ("")
  const [ Guest , setGuest ] = useState ("")
  const [ ChecKIn , setChecKIn ] = useState ("")
  const [ dhacid, setdhacid ] = useState ("")
  const [Price, setPrice] = useState(0);

  const countryPrices = {
    Somalia: 1200,
    Paris: 6000,
    Canada: 8400,
    London: 7000,
    Japan: 6000
  };

    // Function: Markii wadanka la doorto
    const handleCountryChange = (event) => {
      const selectedCountry = event.target.value;
      setCountry(selectedCountry);
      
      if (countryPrices[selectedCountry]) {
        setPrice(countryPrices[selectedCountry] * Guest);
      } else {
        setPrice(0);
      }
    };

      // Function: Markii Guest la beddelo
  const handleGuestChange = (event) => {
    const guestCount = parseInt(event.target.value);
    setGuest(guestCount);

    if (Country && countryPrices[Country]) {
      setPrice(countryPrices[Country] * guestCount);
    }
  };

  const  hanlegetData = (event) => {
    event.preventDefault()
    if (!Name || !Email || !Type || !Country || !Mobile || !Guest || !Adress || !jinsi || !ChecKIn || !dhacid) {
      toast.error("Fadlan buuxi dhammaan meelaha bannaan!");
      return;
    }
    axios.post("https://somtourism-backend.onrender.com/create", {
      "Name": Name,
      "Email": Email,
      "Type": Type,
      "Country": Country,
      "Mobile": Mobile,
      "Guest": Guest,
      "Adress": Adress,
      "jinsi": jinsi,
      "CheckIn": ChecKIn,
      "dhacid": dhacid,
    }).then((res)=>{
      toast.success("success")
      setTimeout(()=>{
        navigate("/payment")
        }, 2000)

    }).catch((err)=>{
      console.log(err)
    })
  }


  return (
    <div className="min-h-screen  ">
    <Header />
    <Scroll/>
      {/* Booking Form */}
      <div className="max-w-4xl mx-auto mb-10 p-6 shadow-lg border-2 border-orange-300 rounded-lg">
        <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Booking Form</h2>
        <h1 className="mt-6">Information</h1>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input value={Name} onChange={(event) => setName (event.target.value)} type="text" placeholder="Your Name" className="border p-2 outline-none rounded w-full" />
          <input value={Email} onChange={(event) => setEmail (event.target.value)} type="email" placeholder="Email Address" className="border p-2 outline-none rounded w-full" />
          <select  value={Type}  onChange={(event) => setType(event.target.value)}  className="border p-2 rounded w-full"
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="female"> Female</option>
      </select>
          <select value={jinsi} onChange={(event) => setjinsi (event.target.value)} className="border p-2 rounded w-full">
          <option value="">Select Type</option>
            <option>Romance</option>
            <option>Adventure</option>
            <option>Culture</option>
          </select>
          <select value={Country} onChange={handleCountryChange} className="border p-2 rounded w-full">
          <option value="">Select Country </option>
            <option>Somalia</option>
            <option>Paris</option>
            <option>Canada</option>
            <option>London</option>
            <option>Japan</option> 
          </select>
          <input value={Guest} onChange={handleGuestChange} type="number" placeholder="Guests" className="border outline-none p-2 rounded w-full" />
          <input value={Adress} onChange={(event) => setAdress (event.target.value)} type="text" placeholder="Pickup Address" className="border outline-none p-2 rounded w-full" />
          <input value={Mobile} onChange={(event) => setMobile (event.target.value)} type="Numbetr" placeholder="Enter Your Number" className="border outline-none p-2 rounded w-full" />
          <div>
            <label htmlFor="">Check In</label>
            <input value={ChecKIn} onChange={(event) => setChecKIn (event.target.value)} type="date" placeholder="Enter your Check In" className="border outline-none p-2 rounded w-full" />
          </div>
          <div>
            <label htmlFor="">Check Out</label>
            <input value={dhacid} onChange={(event) => setdhacid (event.target.value)} type="date" placeholder="Enter your Check Out  " className="border outline-none p-2 rounded w-full" />
          </div>
        </form>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
        <span className="text-lg sm:text-xl font-bold">Total Price: ${Price}</span>
        <button onClick={hanlegetData}  className="bg-orange-500 text-white px-6 py-2 rounded mt-4 sm:mt-0">Book Now</button>
        </div>
      </div>
      <Footer/>
      < Toaster />
    </div>
  );
};

export default Register;
