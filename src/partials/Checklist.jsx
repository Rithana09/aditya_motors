import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Checklist = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
       label: "Air Filter Cleaning",
       image: "/aircleaning.webp",
        description: "At Aditya Motors, we understand that your bike deserves the best care..Keeping your bike’s air filter clean is essential for optimal engine performance. A clogged or dirty air filter can reduce airflow to the engine, causing it to work harder and use more fuel. Regular cleaning of the air filter ensures that only clean air enters the engine, helping it run smoothly and efficiently. This service helps improve combustion, reduces engine wear, and enhances fuel economy, all while keeping emissions low. At Aditya Motors, we ensure your bike gets the best care to keep it running at its best, ensuring both longevity and performance."
       },
    { 
      label: "Vehicle Washing",
       image: "/vehiclewashing.jpg", 
       description: "At Aditya Motors, we understand that your bike deserves the best care. Our Vehicle Washing service goes beyond just cleaning the exterior. We provide a thorough wash that targets hard-to-reach areas like the chain, spokes, and underbody, ensuring your bike runs smoothly and looks pristine.A clean bike not only enhances its appearance but also helps maintain its performance by removing dirt and grime that can cause wear and tear over time. Our experts use high-quality cleaning products to gently wash your bike, preserving its finish and ensuring all components are properly cleaned."
       },
    { 
      label: "Self Motor Checking",
       image: "/selfmotor.jpeg", 
       description: "At Aditya Motors, our Self Motor Checking service ensures your bike’s engine runs smoothly. We inspect the motor for any issues, check oil levels, test compression, and listen for unusual sounds. This thorough inspection helps identify any potential problems early, allowing for timely repairs and ensuring your bike operates at its best. Regular motor checks are essential for maintaining engine performance, improving fuel efficiency, and extending the life of your bike."
       },
    { 
      label: "Chain Lubrication",
       image: "/chainlubrication.jpg",
        description: "Our Chain Lubrication Service ensures smooth anAt Aditya Motors, we understand the importance of a well-maintained bike chain for a smooth and efficient ride. Our Chain Lubrication Service ensures that your bike’s chain is properly lubricated to reduce wear, improve shifting, and prevent rust. A properly lubricated chain provides smoother gear transitions, reduces friction, and enhances the overall performance of your bike, allowing you to ride with ease and confidence." 

    },
    { 
      label: "Nut and Bolt Adjustments",
       image: "/nutandbolt.jpg",
        description: "Our Nut and Bolt Adjustment service ensures that all the critical components of your bike are securely tightened. We meticulously inspect and adjust the nuts, bolts, and fasteners across various parts of your bike, such as the frame, handlebars, wheels, and engine. This service is essential for maintaining the safety and performance of your bike, preventing any issues that could arise from loose or misaligned parts. At Aditya Motors, we provide thorough attention to detail to make sure your bike remains in top-notch condition for optimal riding experience."
       },
    { 
      label: "Vehicle Polishing",
       image: "/vehiclepolishing.jpg",
        description: "Give your bike a shiny, smooth finish with our professional vehicle polishing service. We clean and polish your bike's exterior to remove dirt, scratches, and oxidation. This service enhances the bike's appearance and helps maintain its paintwork, ensuring it looks as good as new. Regular polishing not only improves the aesthetics of your bike but also helps in protecting the paint from the elements, offering a layer of protection against dirt, water, and UV damage."
       },
    { 
      label: "Engine Oil Cleaning/Replacement",
       image: "/engineoil.jpg",
        description: "The Engine Oil Cleaning/Replacement service is typically provided by professional bike service centers or motorcycle repair shops. In the context of your code, the service is part of a general bike maintenance checklist offered by Aditya Motors, which ensures that your bike runs smoothly by replacing old oil, cleaning engine components, and replacing the oil with fresh, high-quality oil."
       },
    { 
      label: "EV Bike Service",
       image: "/evservice.jpg",
        description: "Our EV Bike Service ensures the smooth operation of your electric vehicle. We perform a detailed inspection of the electric motor to identify any wear or damage. Additionally, we check the battery’s performance, its connections, and test the overall efficiency of the system. This service helps keep your electric bike running at its best, ensuring maximum range, smooth operation, and long-term reliability." 
      },
    { 
      label: "Tyre Pressure Check",
       image: "/tyre.jpg",
        description: "Ensure your bike’s tyres are properly inflated for optimal performance and safety. Over-inflated or under-inflated tyres can reduce handling, increase wear, and decrease fuel efficiency. At Aditya Motors, we check and adjust the tyre pressure to the manufacturer’s recommended levels, ensuring your bike rides smoothly and safely on every journey."
       },
    { 
      label: "Spark Plug Cleaning/Replacement",
       image: "/sparkplug.jpg",
        description: "The Spark Plug Cleaning/Replacement service involves cleaning or replacing the spark plugs of your bike to ensure it runs smoothly. Spark plugs are essential for engine performance as they ignite the fuel-air mixture in the engine. Over time, spark plugs can accumulate carbon and dirt, leading to poor engine performance, misfires, or difficulty starting the bike."
       },
    {
       label: "Carburator Cleaning",
        image: "/carburator.jpg",
         description: "The Carburetor Cleaning service is essential for maintaining your bike's engine performance. Over time, dirt, fuel deposits, and other blockages can accumulate inside the carburetor, leading to poor engine performance, reduced fuel efficiency, and difficulty in starting the bike.At Aditya Motors, we ensure that your bike’s carburetor is cleaned with precision to restore your bike's optimal performance." 
        },
    { 
      label: "Brake Shoe/Pad Roughing/Replacement",
       image: "/shoe.jpg",
        description: "The Brake Shoe/Pad Roughing/Replacement service is typically provided by professional motorcycle service centers, bike repair shops, or authorized bike dealerships. These services are essential for maintaining the braking efficiency and safety of your motorcycle or bike. The technicians inspect the brake shoes or pads, roughen or replace them to ensure that the brakes perform optimally and that your bike's braking system is responsive and effective." 
      },
  ];

  // Group services into rows of 4
  const groupedServices = Array.from({ length: Math.ceil(services.length / 4) }, (_, i) =>
    services.slice(i * 4, i * 4 + 4)
  );

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  return (
    <div className="p-4">
      <div className="relative rounded-lg overflow-hidden">
        <div className="flex flex-col items-center text-center p-4 sm:p-6 md:p-10">
          <h2 className="text-3xl sm:text-4xl font-[jost,sans-serif] font-extrabold text-black mb-4">
            GENERAL BIKE SERVICE CHECKLIST
          </h2>

          <p className="text-sm sm:text-base font-[Hind_Vadodara] text-black mb-8 max-w-3xl mx-auto">
            Here at Aditya Motors, we provide a General Bike Service to ensure your bike stays in optimal condition. 
            Our comprehensive checklist includes:
          </p>

          {/* Service Buttons */}
          <div className="flex flex-col gap-8 w-full max-w-8xl">
            {groupedServices.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap justify-center gap-4 w-full">
                {row.map((service, idx) => {
                  const actualIndex = rowIndex * 4 + idx; // adjust this calculation for 4 items per row
                  return (
                    <button
                      key={actualIndex}
                      onClick={() => handleToggle(actualIndex)}
                      className={`w-[22%] px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 
                        border text-sm sm:text-base font-semibold 
                        rounded-full truncate text-center 
                        transition duration-300
                        cursor-pointer  
                        ${activeIndex === actualIndex
                          ? 'bg-[#b72819] text-white'
                          : 'bg-[#D33523] text-white hover:bg-[#b72819]'
                        }`}
                    >
                      {service.label}
                    </button>
                  );
                })}

                {/* Active Service Description */}
                {activeIndex === rowIndex * 4 || activeIndex === rowIndex * 4 + 1 || activeIndex === rowIndex * 4 + 2 || activeIndex === rowIndex * 4 + 3 ? (
                  <motion.div
                    key={`desc-${activeIndex}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white shadow-lg rounded-lg p-2 w-full mt-3 flex flex-col sm:flex-row items-center justify-between"
                  >
                    {/* Description on the left */}
                    <div className="flex-1 text-left">
                      <p className="text-black font-[jost,sans-serif] lg:text-xl lg:w-4/5 text-base leading-relaxed">{services[activeIndex].description}</p>
                    </div>

                    {/* Image on the right */}
                    <div className="flex-shrink-0 w-48 h-48 mt-4 mr-5 sm:mt-0">
                      <img
                        src={services[activeIndex].image}
                        alt={services[activeIndex].label}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                  </motion.div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
