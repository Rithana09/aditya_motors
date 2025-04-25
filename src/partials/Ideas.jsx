import React from "react";

const Ideas = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div
        className="relative bg-cover bg-center h-[150vh] flex items-center"
        style={{
          backgroundImage: `url('/about3.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}

       <div
          className="absolute top-1/2 left-1/2 sm:left-1/2 lg:left-40 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2
          text-center lg:text-left px-4 md:px-8 lg:px-0 w-full sm:w-[90%] lg:w-auto"
        >

          {/* Title and Text */}
          <p className="text-red-600 text-xl sm:text-2xl font-semibold">
            IDEAS AND CONCEPTS
          </p>
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mt-4">
            UNIQUENESS
          </h2>
          <p className="text-white text-sm sm:text-base md:text-lg mt-6 max-w-4xl mx-auto md:mx-0">
          Our team is trained in handling all brands and models of bikes.
           We focus on providing high-quality service, no matter what bike you ride.
           As an authorized Honda service centre, we follow Honda's service
            guidelines and use genuine parts for your Honda bike.
          </p>

          {/* Button */}
          <button className="bg-red-600 text-white mt-5 py-5 px-9 rounded-md hover:bg-red-700 transition duration-300 text-sm font-medium">
            Consult Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
