import React from 'react';
import { motion } from 'framer-motion';

const Checklist = () => {
  const buttonLabels = [
    "Air Filter Cleaning", "Vehicle Washing", "Self Motor Checking",
    "Chain Lubrication", "Nut and Bolt Adjustments", "Vehicle Polishing",
    "Engine Oil Cleaning/Replacement", "EV Bike Service", "Tyre Pressure Check",
    "Spark Plug Cleaning/Replacement", "Carburator Cleaning", "Brake Shoe/Pad Roughing/Replacement"
  ];

  return (
    <div className="p-4">
      {/* Background with overlay */}
      <div className="relative rounded-lg overflow-hidden">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('hondabike.jpeg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />
        
        {/* Content */}
        <div className="relative flex flex-col items-center text-center p-4 sm:p-6 md:p-10">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            General Bike Service Checklist
          </h2>
          
          {/* Paragraph */}
          <p className="text-sm sm:text-base text-white mb-8 max-w-3xl mx-auto">
            Here at Aditya Motors, we provide a General Bike Service to ensure your bike stays in optimal condition. 
            Our comprehensive checklist includes:
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-10">
            {buttonLabels.map((label, index) => (
              <motion.button
                key={index}
                className="bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 md:px-9 md:py-5 
                  border border-transparent hover:bg-transparent hover:border-white transition duration-300 
                  text-sm sm:text-base font-semibold rounded-full flex-1 min-w-[45%] sm:min-w-[30%] 
                  max-w-full truncate"  
                initial={{ opacity: 0, y: 50 }}  
                whileInView={{ opacity: 1, y: 0 }}  
                transition={{ delay: index * 0.1, duration: 0.5 }} 
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
