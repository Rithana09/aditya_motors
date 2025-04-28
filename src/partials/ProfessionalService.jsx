import React from "react";
import { motion } from "framer-motion";

const ProfessionalService = () => {
  return (
    <div className="relative">
      {/* Banner Image */}
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url(/hondabannerr3.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Overlay */}

        {/* Content */}
        <div
          className="absolute top-1/2 left-1/2 sm:left-1/2 lg:left-40 transform -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2
          text-center lg:text-left px-4 md:px-8 lg:px-0 w-full sm:w-[90%] lg:w-auto"
        >
          {/* Animate each text */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-[jost] text-xl sm:text-2xl lg:text-2xl font-semibold"
            style= {{ color: "#D33523" }}  >
            PROFESSIONAL SERVICE
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white font-[jost,sans-serif] text-3xl lg:w-2/3 sm:text-4xl lg:text-6xl font-bold mt-4"
          >
            ATTENTION TO DETAIL
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-white lg:w-2/3 text-sm font-[Hind_Vadodara] sm:text-base lg:text-lg mt-6 max-w-full sm:max-w-4xl"
          >
            At Aditya Motors, we treat every bike as our own. Our expert technicians ensure that all services are performed with the utmost precision. Our goal is to get your bike running at its best, so you can ride with confidence.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
            className="font-[jost,sans-serif] text-white bg-[#D33523] mt-5 py-5 px-9 border border-transparent hover:bg-transparent hover:border-white transition duration-300 text-sm font-medium"
            >
            CONSULT NOW →
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalService;
