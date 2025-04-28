import React from "react";
import { motion } from "framer-motion";

const Ideas = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div
        className="relative bg-cover bg-center h-[130vh] flex items-center"
        style={{
          backgroundImage: `url('/idea.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}

        <div
          className="absolute top-1/2 left-1/2 sm:left-1/2 lg:left-40 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2
          text-center lg:text-left px-4 md:px-8 lg:px-0 w-full sm:w-[90%] lg:w-auto"
        >
          {/* Animated Texts */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-red-600 text-xl font-[jost] sm:text-2xl font-semibold"
          >
            IDEAS AND CONCEPTS
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white text-3xl font-[jost] sm:text-4xl md:text-5xl font-bold mt-4"
          >
            UNIQUENESS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-white font-[Hind_Vadodara] lg:w-2/3 text-sm sm:text-base md:text-lg mt-6 max-w-4xl mx-auto md:mx-0"
          >
            Our team is trained in handling all brands and models of bikes.
            We focus on providing high-quality service, no matter what bike you ride.
            As an authorized Honda service centre, we follow Honda's service
            guidelines and use genuine parts for your Honda bike.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Ideas;
