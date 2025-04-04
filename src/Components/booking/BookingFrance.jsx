import React from "react";
import tokyo from "../assets/tokyo.png";
import tokyo2 from "../assets/tokyo2.png";
import tokyo3 from "../assets/tokyo3.png";
import Footer from "../Components/Footer";

const Register = () => {
  return (
    <div className="min-h-screen  p-4">
      {/* Header */}
      <div className="   p-6  ">
        <nav className="flex flex-wrap justify-between border-b pb-2 mb-4 text-sm sm:text-base">
          <div className="flex flex-wrap gap-2 sm:gap-4 text-gray-500">
            <span>Detail</span>
            <span className="font-bold text-black">Booking</span>
            <span>Itinerary</span>
            <span>Gallery</span>
            <span>Map</span>
            <span>Reviews</span>
          </div>
        </nav>
        {/* Title and Info */}
        <h2 className="text-xl sm:text-2xl font-bold">Arrive in Tokyo, Japan</h2>
        <p className="text-yellow-500">⭐⭐⭐⭐⭐ (22 Reviews)</p>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-gray-600 mt-2 text-sm sm:text-base">
          <span>⏳ 5 Hours</span>
          <span>👥 Max Guests 100</span>
          <span>📶 Wi-Fi Available</span>
          <span>📅 Aug - Sep</span>
        </div>
        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-4  ">
          <img className="rounded-lg w-[600px] h-[300px]" src={tokyo} alt="Side1" />
          <div className="grid grid-rows-2 gap-2">
            <img className="rounded-lg sm:w-[400px] w-[300px] h-20 sm:h-[145px] " src={tokyo2} alt="Side1" />
            <img className="rounded-lg sm:w-[400px] w-[300px] h-20 sm:h-[145px] " src={tokyo3} alt="Side2" />
          </div>
        </div>
      </div>
      {/* Booking Form */}
      <div className="max-w-4xl mx-auto mt-8  p-6 shadow-lg border-2 border-orange-300 rounded-lg">
        <h2 className="text-xl sm:text-2xl text-center font-bold mb-4">Booking Form</h2>
        <h1 className="mt-6">Information</h1>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input type="text" placeholder="Your Name" className="border p-2 rounded w-full" />
          <input type="email" placeholder="Email Address" className="border p-2 rounded w-full" />
          <select className="border p-2 rounded w-full">
            <option>Romance</option>
            <option>Adventure</option>
          </select>
          <input type="number" placeholder="Guests" className="border p-2 rounded w-full" />
          <select className="border p-2 rounded w-full">
            <option>Bangladesh</option>
            <option>USA</option>
            <option>Somali</option>
            <option>China</option>
            <option>India</option> 
          </select>
          <input type="text" placeholder="Pickup Address" className="border p-2 rounded w-full" />
          <input type="date" className="border p-2 rounded w-full" />
          <input type="date" className="border p-2 rounded w-full" />
          <select className="border p-2 rounded w-full">
            <option>Select Hotel</option>
          </select>
          <select className="border p-2 rounded w-full">
            <option>Adult</option>
            <option>Child</option>
          </select>
        </form>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
          <span className="text-lg sm:text-xl font-bold">Total Price: $565</span>
          <button className="bg-orange-500 text-white px-6 py-2 rounded mt-4 sm:mt-0">Book Now</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
