import React from "react";
import Header from "./Header";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (


    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover lg:mt-19 bg-center"
        style={{
          backgroundImage: "url('adityabanner1.webp')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <Header />


      {/* Animated Text Content */}
      <div className="relative z-20 px-6 py-20 md:px-16 h-full flex items-center justify-center md:justify-end">
        <motion.div
          className="text-left max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl font-[Hind_Vadodara] font-semibold text-white mb-4 opacity-80">
            For the love of biking
          </p>

          <div>
            <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl font-[jost,sans-serif] leading-tight mb-6">
              Welcome to Aditya Motors – Best Bike Service in Bengaluru
            </p>

            <p className="text-white font-[Hind_Vadodara] text-lg sm:text-lg md:text-xl max-w-md leading-relaxed mb-6 opacity-90">
              From routine checks to major fixes, Aditya Motors is your bike’s guardian. Quality care, every time.
            </p>
          </div>

          <div>
            <button
              onClick={() => navigate('/contact')}
              className="font-[jost,sans-serif] bg-[#D33523] text-white mt-5 py-5 px-9 border border-transparent hover:bg-transparent hover:border-white transition duration-300 text-sm font-medium cursor-pointer"
            >
              CONSULT NOW →
            </button>
          </div>
        </motion.div>
      </div>
    </div>

  );
};

export default Banner;
