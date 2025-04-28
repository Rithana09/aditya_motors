import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServiceIntroduction = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const isLeftInView = useInView(leftRef, { once: true });
  const isRightInView = useInView(rightRef, { once: true });

  return (
    <div className="bg-[#161515] text-white px-4 sm:px-6 md:px-8 py-4 md:py-8 mb-0 sm:mb-12 md:mb-16">


      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:gap-12">
        {/* Left Text Section with Animation */}
        <motion.div
          ref={leftRef}
          className="lg:w-1/2 relative"
          initial={{ opacity: 0, x: -100 }}
          animate={isLeftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h4 className="text-red-600 tracking-widest font-[jost] uppercase mb-2 mt-10 text-sm md:text-base">
            About Us
          </h4>
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold leading-tight w-auto sm:w-3/4 md:w-1/2 lg:w-[400px] xl:w-[900px]">
            Welcome to <span className="text-red-500">Aditya Motors</span>, your trusted bike repair shop in town.
          </h1>


          <p
            className="mt-6 text-base font-[Hind_Vadodara] md:text-xl text-gray-300"
          >
            Whether you’re in need of a simple maintenance check or major repairs,
            we are here to keep your bike running smoothly.
          </p>
          <p
            className="mt-4 text-base font-[Hind_Vadodara] md:text-xl text-gray-300"
          >
            As an authorized Honda service centre in Bengaluru, we are proud to offer
            Honda bike services with the best tools and expertise available. Whether
            it’s a performance check, Periodic maintenance, or fixing a specific
            issue, we’re here to help.
          </p>

          <button className="mt-6 font-[jost] text-red-600 hover:text-white text-sm md:text-base flex items-center gap-2 cursor-pointer">
            READ MORE <span>&rarr;</span>
          </button>

          <ul
            className="mt-8 mb-8 space-y-2 text-base md:text-xl font-jost"
          >
            {[
              "Brake Drum Cleaning & Adjustment/Replacement",
              "Custom Paint & Graphics",
              "Performance Upgrades",
              "Detailing and Finishing",
              "Bodywork and Upgrading Components",
              "Motorcycles Restoration",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-red-600">»</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Image Section with Animation */}
        <motion.div
          ref={rightRef}
          className="lg:w-1/2 flex flex-col gap-6 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={isRightInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <img
            src="/bike.png"
            alt="Motorcycle"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded"
          />


          <div className="relative flex flex-col lg:flex-row items-start lg:items-center mt-4 sm:mb-6">
            <div className="lg:w-1/2 relative">
              <p className="text-sm font-[jost] md:text-base lg:text-lg xl:text-xl font-bold leading-relaxed text-white w-full sm:w-full md:w-1/2 lg:w-[250px] xl:w-[350px] sm:mt-4 mb-7 md:mt-6">
                Work from scratch with bespoke frames and will simply tune up your bike to allow you
                optimal enjoyment.
              </p>
            </div>

            <img
              src="/engine.jpg"
              alt="Chrome Detail"
              className="w-full lg:w-1/2 rounded shadow-lg object-cover"
            />
          </div>

          <div className="lg:mb-10">
            <button className="text-red-600 font-[jost] lg:mb-10 hover:text-white text-sm md:text-base flex items-center gap-2 cursor-pointer ">
              READ MORE <span>&rarr;</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceIntroduction;
