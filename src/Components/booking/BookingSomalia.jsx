import React from "react";


const BookingSomalia = () => {
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
        <h2 className="text-xl sm:text-2xl font-bold">Mogadisho, Somalia</h2>
        <p className="text-yellow-500">⭐⭐⭐⭐⭐ (22 Reviews)</p>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-gray-600 mt-2 text-sm sm:text-base">
          <span>⏳ 7 days</span>
          <span>👥 Max Guests 70</span>
          <span>📶 Wi-Fi Available</span>
          <span>📅Oct - Nov</span>
        </div>
        {/* Images Section */}
        <div className="flex gap-5 mt-4  ">
          <div>
            <img className="rounded-lg w-[800px] h-[500px]" src="https://i.pinimg.com/474x/98/7a/97/987a970314e248c66fd1a790b0b3e43e.jpg" alt="Side1" />
          </div>
          <div className="grid grid-rows-2 gap-2">
            <img className="rounded-lg sm:w-[400px] w-[200px] h-[240] sm:h-[245px] " src="https://i.pinimg.com/736x/11/6a/8f/116a8f2ec180db6b33a441ec22299e3b.jpg" alt="Side1" />
            <img className="rounded-lg sm:w-[400px] w-[200px] h-[240] sm:h-[245px] " src="https://i.pinimg.com/736x/c7/1f/8f/c71f8f9c151e61e1fe0d80c4eb73d63c.jpg" alt="Side2" />
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
            <option>Adventure</option>
            <option>Romance</option>
            <option>Culture</option>
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
    </div>
    </div>
  );
};

export default BookingSomalia;
