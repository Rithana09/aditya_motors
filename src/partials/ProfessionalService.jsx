import React from "react";

const ProfessionalService = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/professional.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay for readability */}
        <div
          className="absolute top-1/2 left-1/2 sm:left-1/2 lg:left-40 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2
          text-center lg:text-left px-4 md:px-8 lg:px-0 w-full sm:w-[90%] lg:w-auto"
        >
          <p className="text-red-600 text-xl sm:text-2xl font-semibold">
            PROFESSIONAL SERVICE
          </p>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-4">
            ATTENTION TO DETAIL
          </h2>
          <p className="text-white text-sm sm:text-base lg:text-lg mt-6 max-w-full sm:max-w-4xl">
            At Aditya Motors, we treat every bike as our own. Our expert technicians ensure that all services are performed with the utmost precision. Our goal is to get your bike running at its best, so you can ride with confidence.
          </p>
          <button className="bg-red-600 text-white mt-5 py-5 px-9 rounded-md hover:bg-red-700 transition duration-300 text-sm font-medium">
            Consult Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalService;
