import React, { useState } from "react";
// import frame from '../assets/frame.png';
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Scroll from "../Components/Scroll";



const destinations = [
  { name: "Somalia", image: "https://i.pinimg.com/736x/8c/e7/fb/8ce7fb71350d9f494084c46bed4b4aa2.jpg" },
  { name: "Canada", image: "https://i.pinimg.com/736x/fc/3f/26/fc3f26002a8b326a0449c73fea855963.jpg" },
  { name: "London", image: "https://i.pinimg.com/736x/1f/69/6c/1f696ced67742bf53f14bf2c6ecb3348.jpg" },
  { name: "Japan", image: "https://i.pinimg.com/736x/5a/2a/28/5a2a2845220b43007c937cadfbc3d1af.jpg" },
  { name: "Somali", image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gxA93kMV93zpBS-xh-NqVNALPX0oJVc7Lw&s"},
  { name: "Paris", image: "https://i.pinimg.com/736x/e0/df/4a/e0df4a9f0d99381d8728e26b54f55a6e.jpg" },
  { name: "Canada", image: "https://i.pinimg.com/736x/7e/ba/1f/7eba1f81411e9e1c21928fef4943e9a5.jpg" },
  { name: "London", image: "https://i.pinimg.com/736x/b6/5c/25/b65c25280c938d8969c865e167b17c96.jpg" },
  { name: "Japan", image: "https://i.pinimg.com/736x/74/6e/58/746e580913d54db72ab9f2eebd70fbfb.jpg" },
  { name: "Somalia", image: "https://i2.wp.com/www.garanuug.com/wp-content/uploads/2016/07/Surudcad.png?fit=1200%2C620" },
  { name: "Japan", image: "https://i.pinimg.com/736x/ac/3e/34/ac3e343d4485dccb525798e94469a0c5.jpg" },
  { name: "Canada", image: "https://i.pinimg.com/736x/fc/3f/26/fc3f26002a8b326a0449c73fea855963.jpg" },
];

const itemsPerPage = 4;

const Destination = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  const visibleDestinations = destinations.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="min-h-screen">
      <Header/>
      <Scroll/>
      <div className="relative w-full h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('/destination.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center ">
          <img className="w-full h-full " src={frame} alt="" />
          <h1 className="absolute text-4xl font-bold">Destination</h1>
          <p className="absolute bottom-20 text-[#d1d0d0] mt-2 max-w-2xl">Showcase your destination offers with the all-encompassing destination lists that contain all the amazing places your customers can visit.</p>
        </div>
      </div>

      <div className="text-center py-12 px-4">
        <h2 className="text-3xl font-bold">Explore All Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {visibleDestinations.map((destination, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <img src={destination.image} alt={destination.name} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-xl font-bold">
                {destination.name}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            className={`px-4 py-2 border rounded ${currentPage === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 text-white"}`}
            disabled={currentPage === 0}
          >
            Back
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`px-4 py-2 border rounded ${currentPage === index ? "bg-orange-500 text-white" : "bg-white"}`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
            className={`px-4 py-2 border rounded ${currentPage === totalPages - 1 ? "bg-gray-300 cursor-not-allowed" : "bg-orange-500 text-white"}`}
            disabled={currentPage === totalPages - 1}
          >
            Next
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Destination;
