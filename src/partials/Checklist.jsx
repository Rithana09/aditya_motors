import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Checklist = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      label: "Air Filter Cleaning",
      image: "/aircleaning.webp",
      description: "Keeping your bike’s air filter clean is essential for optimal engine performance. A clogged or dirty air filter can reduce airflow to the engine, causing it to work harder and use more fuel. Regular cleaning of the air filter ensures that only clean air enters the engine, helping it run smoothly and efficiently. This service helps improve combustion, reduces engine wear, and enhances fuel economy, all while keeping emissions low. At Aditya Motors, we ensure your bike gets the best care to keep it running at its best, ensuring both longevity and performance."
    },
    {
      label: "Vehicle Washing",
      image: "/vehiclewashing.jpg",
      description: "At Aditya Motors, we understand the importance of maintaining your bike's appearance and performance. Our professional bike washing service ensures that your bike is thoroughly cleaned, looking pristine, and running smoothly. Whether it's dirt from the roads or grime from daily use, we take care of it all!"
    },
    {
      label: "Self Motor Checking",
      image: "/selfmotor.jpeg",
      description: "At Aditya Motors, we prioritize the performance and safety of your vehicle. Our Self-Motor Checking Service ensures that your bike’s motor is operating smoothly and efficiently, helping to prevent unexpected breakdowns and costly repairs. Whether you are experiencing unusual noises, starting issues, or simply want to ensure everything is in top condition, our skilled technicians are here to help."
    },
    {
      label: "Chain Lubrication",
      image: "/chainlubrication.jpg",
      description: "At Aditya Motors, we know how crucial a well-maintained chain is for the smooth operation of your bike. Our Chain Lubrication Service ensures that your bike’s chain operates efficiently, preventing wear and tear while enhancing overall performance. Proper lubrication reduces friction, protects against rust, and prolongs the life of your bike’s chain and sprockets."
    },
    {
      label: "Nut and Bolt Adjustments",
      image: "/nutandbolt.jpg",
      description: "At Aditya Motors, we believe in ensuring every part of your bike is securely fastened for optimal performance and safety. Our Nut and Bolt Adjustment Service is designed to tighten and check all critical fasteners on your bike, ensuring that nothing is loose or out of place. Regular tightening of nuts and bolts is essential for preventing damage, avoiding safety risks, and maintaining the integrity of your bike."
    },
    {
      label: "Vehicle Polishing",
      image: "/vehiclepolishing.jpg",
      description: "At Aditya Motors, we believe that your bike deserves to look as great as it performs. Our Vehicle Polishing Service is designed to restore and enhance your bike's appearance, giving it a sleek, shiny finish while protecting the paintwork from the elements. Whether you're looking to restore an older bike or maintain the shine of a new one, our professional polishing service ensures your bike stands out on the road."
    },
    {
      label: "Engine Oil Cleaning/Replacement",
      image: "/engineoil.jpg",
      description: "At Aditya Motors, we understand that the engine is the heart of your bike, and keeping it running smoothly is essential for optimal performance. Our Engine Oil Cleaning and Replacement Service ensures that your bike’s engine stays lubricated, clean, and efficient, reducing friction, preventing overheating, and prolonging engine life. Regular oil changes and cleaning are crucial for maintaining your bike's performance and preventing costly repairs."
    },
    {
      label: "EV Bike Service",
      image: "/evservice.jpg",
      description: "At Aditya Motors, we are proud to offer top-notch EV Bike Service to keep your electric bike in peak condition. As electric bikes continue to grow in popularity, proper maintenance is crucial for ensuring longevity, performance, and efficiency. Our dedicated EV bike service focuses on the unique needs of electric vehicles, providing you with expert care and high-quality service."
    },
    {
      label: "Tyre Pressure Check",
      image: "/tyre.jpg",
      description: "At Aditya Motors, we understand that proper tyre pressure is essential for the safe and efficient operation of your bike. That’s why we offer a thorough Tyre Pressure Check Service to ensure that your bike's tyres are properly inflated. Maintaining the correct tyre pressure not only enhances safety but also improves fuel efficiency, handling, and the overall lifespan of your tyres."
    },
    {
      label: "Spark Plug Cleaning/Replacement",
      image: "/sparkplug.jpg",
      description: "We know that a healthy spark plug is essential for your bike’s engine performance. Spark plugs play a crucial role in igniting the air-fuel mixture inside the engine, ensuring smooth and efficient combustion. Our Spark Plug Cleaning and Replacement Service is designed to maintain or restore your bike's engine performance, improve fuel efficiency, and reduce emissions by keeping your spark plugs in top condition."
    },
    {
      label: "Carburator Cleaning",
      image: "/carburator.jpg",
      description: "We understand that the carburetor is a vital component in your bike's engine, responsible for mixing air and fuel in the correct proportions for combustion. Over time, dirt, debris, and carbon buildup can clog the carburetor, leading to poor engine performance, rough idling, decreased fuel efficiency, and starting issues. Our Carburetor Cleaning Service ensures that your carburetor functions properly, maintaining the smooth operation and efficiency of your bike's engine."
    },
    {
      label: "Brake Shoe/Pad Roughing/Replacement",
      image: "/shoe.jpg",
      description: "We prioritize your safety and the smooth operation of your bike, and we know that the braking system is one of the most important aspects of any vehicle. Over time, brake shoes and pads can wear down or become contaminated, leading to reduced braking efficiency and increased stopping distances. Our Brake Shoe/Pad Roughing and Replacement Service ensures that your bike's braking system is in top condition, providing you with the safety and performance you need on the road."
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
                      className={`w-full sm:w-[45%] md:w-[22%] px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 
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
                      <p className="text-black lg:text-xl lg:w-4/5 text-base">{services[activeIndex].description}</p>
                    </div>

                    {/* Image on the right */}
                    <div className="flex-shrink-0 lg:mr-10 w-48 h-48 mt-4 sm:mt-0">
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
