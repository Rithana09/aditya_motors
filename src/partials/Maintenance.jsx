import React from "react";
import { motion } from "framer-motion";

const Maintenance = () => {
  return (
    <div
      className="
        flex flex-col md:flex-row items-start
        px-4 sm:px-6 md:px-16 py-8 sm:py-10 md:py-12
      "
    >
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex flex-col justify-end mb-8 md:mb-0">
        <img
          src="/bike5.jpg"
          alt="Maintenance"
          className="
            w-3/4 sm:w-4/5 md:w-[90%] lg:w-[90%]
            h-auto object-contain rounded-lg mx-auto
          "
        />
      </div>

      {/* Right Text Section with animation */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-between"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Heading */}
        <p className="font-[jost] text-lg sm:text-xl md:text-2xl font-semibold mb-4"
         style= {{ color: "#D33523" }}>
          PROFESSIONAL SERVICES
        </p>

        {/* Bold Texts */}
        <p className="text-black font-[jost] lg:w-2/3 lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          QUALITY MACHINE
        </p>
        <p className="text-black font-[jost] lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          MAINTENANCE
        </p>

        {/* Paragraph 1 */}
        <p className="text-gray-700 font-[Hind_Vadodara] text-sm sm:text-base md:text-base mb-4 leading-relaxed">
          Our top priority is making sure you’re happy with our service.
          We take the time to listen to your concerns and provide personalized solutions.
        </p>

        {/* Paragraph 2 */}
        <p className="text-gray-700 font-[Hind_Vadodara] text-sm sm:text-base md:text-base mb-6 leading-relaxed">
          We understand how important your bike is to you. That's why we
          prioritize quick repairs and maintenance to get you back on the road faster.
        </p>

        {/* Bottom Image */}
        <div className="mt-auto">
          <img
            src="/service2.png"
            alt="Service"
            className="
              w-3/4 sm:w-4/5 md:w-[80%] lg:w-[80%]
              h-auto object-contain rounded-lg mx-auto
            "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Maintenance;
