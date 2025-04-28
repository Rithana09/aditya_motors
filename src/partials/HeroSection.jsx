import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Function to handle video play by opening the link in a new tab
  const handlePlayClick = () => {
    // Replace 'YOUR_VIDEO_ID' with the actual video ID
    window.open('https://www.youtube.com/shorts/tm9BZhn3zcw', '_blank');
  };

  return (
    <div
      className="relative bg-cover bg-center 
        h-[80vh] sm:h-[90vh] md:h-screen 
        flex items-center"
      style={{ backgroundImage: "url('/bike4.jpg')" }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Text block */}
      <div
        className="
          relative z-10 
          px-4 sm:px-6 md:px-12 lg:px-16 
          text-center md:text-left
          w-full md:w-3/4 lg:w-1/2
        "
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-red-600 text-xs font-[jost] sm:text-sm md:text-base font-semibold uppercase tracking-widest"
        >
          Custom Culture
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-3 font-extrabold leading-tight text-white
          text-3xl sm:text-4xl md:text-5xl font-[jost] lg:text-6xl
        "
        >
          MORE THAN JUST<br />A LIFESTYLE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-300
          text-sm sm:text-base font-[Hind_Vadodara] md:text-lg
        "
        >
          At Aditya Motors, our commitment to quality and customer satisfaction is what sets us apart. Don’t just take our word for it—see what our customers have to say about their experience with our services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-8 flex justify-center md:justify-start"
        >
          <button
            className="
              flex items-center gap-2 sm:gap-3 
              px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 
              bg-[#D33523] text-white font-semibold 
              rounded-full hover:bg-red-700 transition
              text-sm sm:text-base
            "
            onClick={handlePlayClick} // Trigger the video play
          >
            <span
              className="
                w-8 h-8 sm:w-10 sm:h-10 cursor-pointer
                rounded-full border-2 border-[#D33523]
                flex items-center justify-center 
                bg-[#D33523] text-red-600 font-bold
              "
            >
              ▶
            </span>
            <span className="uppercase font-[jost] cursor-pointer tracking-wider">
              Watch Now
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
