import React from "react";
import Header from "./Header";
import { motion } from "framer-motion"; // Import Framer Motion

const Banner = () => {
  return (
    <div className="relative w-full h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/adityabannerr.png')",
          backgroundPosition: "center -19%",
        }}
      >
        {/* Right-side gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/90 to-transparent" />
      </div>

      {/* Header */}
      <Header />

      {/* Animated Text Content */}
      <div className="relative z-20 px-6 py-20 md:px-16 h-full flex items-center justify-center md:justify-end">
        <motion.div
          className="text-left max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
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
            <button className="bg-red-600 text-white mt-5 py-5 px-9 border border-transparent hover:bg-transparent hover:border-white transition duration-300 text-sm font-medium">
              CONSULT NOW →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
