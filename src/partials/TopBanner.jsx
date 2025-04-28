import React from "react";
import { motion } from "framer-motion"; 
import Header from "./Header";
import Layout from "./Layout";

const TopBanner = ({ title, subtitle, image, showHeader = true }) => {
  return (
    <Layout>
      <div className="relative w-full text-white overflow-hidden h-64 sm:h-80 md:h-96">
        {/* Full-width Image Container */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-70" />
        </div>

        {/* Header */}
        {showHeader && (
          <div className="relative z-10">
            <Header />
          </div>
        )}

        {/* Centered Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none z-20 px-4 sm:px-6 md:px-0">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-red-600 uppercase tracking-wide text-xs sm:text-sm md:text-base"
          >
            {subtitle}
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="font-bold mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
          >
            {title}
          </motion.h2>
        </div>
      </div>
    </Layout>
  );
};

export default TopBanner;
