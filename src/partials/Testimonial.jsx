import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Aditya Motors is the best place I’ve taken my bike to. The staff are friendly, knowledgeable, and they use only genuine parts. My Honda runs smoother than ever!.",
    name: "Manish",
    company: "THUNDER RACE",
    image: "/testimonial1.jpg",
  },
  {
    id: 2,
    text: "I had a sudden issue with my brakes and they fixed it in no time. Great pricing, honest service, and top-notch professionalism. Highly recommended!",
    name: "Ravi Singh",
    company: "SPEED MOTORS",
    image: "/testimonial2.jpg",
  },
  {
    id: 3,
    text: "It’s hard to find a garage you can trust. Aditya Motors has been my go-to for regular servicing. They explain everything clearly and always deliver on time...",
    name: "Jerish",
    company: "MOTO EXPERTS",
    image: "/testimonial3.jpg",
  },
];

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  // Auto-pagination effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="uppercase font-[jost] text-sm md:text-base mb-3" style= {{ color: "#D33523" }}>
              WHAT OUR CLIENT SAY
            </h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl  font-[jost] lg:text-6xl font-bold leading-tight mb-4">
              TESTIMONIAL<br />FROM OUR<br />HAPPY CLIENT
            </h2>
            <p className="text-gray-400 font-[Hind_Vadodara] max-w-md text-sm sm:text-base">
              At Aditya Motors, customer satisfaction is our top priority.
              Every service is carried out with precision, care, and a commitment to excellence. We take pride in delivering a seamless experience — from regular maintenance to complex repairs — ensuring your bike stays in peak condition. Join the hundreds of riders who trust us for quality service they can count on.
            </p>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Quote Icon */}
            <div className="absolute -top-6 -left-6 text-red-500 hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="..." />
              </svg>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white p-6 sm:p-8 rounded-none shadow-xl">
              <div className="flex flex-col sm:flex-col md:flex-row gap-6 sm:gap-8">
                {/* Text Section */}
                <div className="w-full md:w-2/3">
                  <p className="text-gray-600 mb-6 text-sm sm:text-base">
                    {testimonials[activeIndex].text}
                  </p>
                  <div className="w-12 h-1 bg-red-500 mb-4"></div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-gray-500 uppercase text-xs sm:text-sm tracking-wider">
                    {testimonials[activeIndex].company}
                  </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/3">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-56 sm:h-64 md:h-72 object-cover object-top sm:object-center rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? "bg-red-500" : "bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
