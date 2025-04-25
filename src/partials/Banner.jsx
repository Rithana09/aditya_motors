import React from "react";
import Header from "./Header";
import { FaWhatsapp, FaInstagram, FaTelegram } from "react-icons/fa"; // Import the icons

const Banner = () => {
  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/adityabannerr.png')",
          backgroundPosition: "center -19%", // Moves the background image down
        }}
      >
        {/* Right-side gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent" />
      </div>

      {/* Content */}
      <Header />

      {/* Text Content */}
      <div className="relative z-20 px-6 py-20 md:px-16 h-full flex items-center justify-center md:justify-end">
        <div className="text-left max-w-xl">
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-white mb-4 opacity-80">
            For the love of biking
          </p>

          <div>
            <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl leading-tight mb-6">
              Welcome to Aditya Motors – Best Bike Service in Bengaluru
            </p>

            <p className="text-white text-lg sm:text-lg md:text-xl max-w-md leading-relaxed mb-6 opacity-90">
              From routine checks to major fixes, Aditya Motors is your bike’s
              guardian. Quality care, every time.
            </p>
          </div>

          <div>
            <button className="bg-red-600 text-white py-4 px-8 rounded-md hover:bg-red-700 transition duration-300 transform hover:scale-105 text-sm font-semibold shadow-lg">
              CONSULT NOW →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
